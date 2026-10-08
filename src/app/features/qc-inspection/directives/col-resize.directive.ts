import { Directive, ElementRef, Renderer2, Input, OnInit, OnDestroy, NgZone } from '@angular/core';

@Directive({
  selector: '[appColResize]'
})
export class ColResizeDirective implements OnInit, OnDestroy {
  @Input('appColResize') colWidths: number[];
  @Input() colIndex: number;

  private handle: HTMLDivElement;
  private startX: number;
  private startWidth: number;
  private isDragging = false;
  private unlisteners: Array<() => void> = [];

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    // Ensure the host element is positioned relatively so the handle is aligned properly
    this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');

    // Create the resize handle element
    this.handle = this.renderer.createElement('div');
    this.renderer.addClass(this.handle, 'resize-handle');
    
    // Inline styling for the handle to avoid CSS dependencies
    this.renderer.setStyle(this.handle, 'position', 'absolute');
    this.renderer.setStyle(this.handle, 'right', '-12px'); // Center it on the border
    this.renderer.setStyle(this.handle, 'top', '0');
    this.renderer.setStyle(this.handle, 'bottom', '0');
    this.renderer.setStyle(this.handle, 'width', '24px'); // Larger touch target for mobile
    this.renderer.setStyle(this.handle, 'cursor', 'col-resize');
    this.renderer.setStyle(this.handle, 'z-index', '10');
    this.renderer.setStyle(this.handle, 'background', 'transparent');
    this.renderer.setStyle(this.handle, 'transition', 'background 0.2s');

    this.renderer.appendChild(this.el.nativeElement, this.handle);

    // Hover effects via JS events
    const mouseenter = this.renderer.listen(this.handle, 'mouseenter', () => this.highlightHandle(true));
    const mouseleave = this.renderer.listen(this.handle, 'mouseleave', () => {
      if (!this.isDragging) {
        this.highlightHandle(false);
      }
    });

    // Start drag event listeners
    const mousedown = this.renderer.listen(this.handle, 'mousedown', (event: MouseEvent) => this.startDrag(event));
    const touchstart = this.renderer.listen(this.handle, 'touchstart', (event: TouchEvent) => this.startDrag(event));

    this.unlisteners.push(mouseenter, mouseleave, mousedown, touchstart);
  }

  private highlightHandle(active: boolean) {
    if (active) {
      // Draw a 2px blue line down the center of the 24px wide transparent touch target
      this.renderer.setStyle(this.handle, 'background', 'linear-gradient(90deg, transparent 11px, #3b82f6 11px, #3b82f6 13px, transparent 13px)');
    } else {
      this.renderer.setStyle(this.handle, 'background', 'transparent');
    }
  }

  private startDrag(event: MouseEvent | TouchEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.isDragging = true;
    this.highlightHandle(true);

    const getX = (e: MouseEvent | TouchEvent) => {
      return 'touches' in e && e.touches.length > 0 
        ? e.touches[0].clientX 
        : (e as MouseEvent).clientX;
    };

    const startX = getX(event);
    const startWidth = this.colWidths[this.colIndex];
    let newWidth = startWidth;

    // Find all matching column cells in the same table/list container
    const container = this.el.nativeElement.closest('.border-list');
    const targetCols: HTMLElement[] = [];
    if (container) {
      const selected = container.querySelectorAll(
        `ion-row.header-row > ion-col:nth-child(${this.colIndex + 1}), ion-row.data-row > ion-col:nth-child(${this.colIndex + 1})`
      );
      selected.forEach((col: any) => targetCols.push(col));
    }

    const doDrag = (moveEvent: MouseEvent | TouchEvent) => {
      // Prevent browser default actions (such as horizontal/vertical scrolling of the list) while dragging
      if (moveEvent.cancelable) {
        moveEvent.preventDefault();
      }
      const currentX = getX(moveEvent);
      const deltaX = currentX - startX;
      newWidth = Math.max(60, startWidth + deltaX);

      // Mutate the DOM directly for high-performance rendering (runs at 60fps)
      targetCols.forEach(col => {
        col.style.width = `${newWidth}px`;
      });
    };

    const stopDrag = () => {
      this.isDragging = false;
      this.highlightHandle(false);
      
      document.removeEventListener('mousemove', doDrag);
      document.removeEventListener('mouseup', stopDrag);
      document.removeEventListener('touchmove', doDrag);
      document.removeEventListener('touchend', stopDrag);

      // Re-enter Angular Zone to update model state and sync with Angular bindings
      this.ngZone.run(() => {
        this.colWidths[this.colIndex] = newWidth;
      });
    };

    // Run listeners outside Angular Zone to bypass change detection cycles
    this.ngZone.runOutsideAngular(() => {
      if ('touches' in event) {
        document.addEventListener('touchmove', doDrag, { passive: false });
        document.addEventListener('touchend', stopDrag);
      } else {
        document.addEventListener('mousemove', doDrag);
        document.addEventListener('mouseup', stopDrag);
      }
    });
  }

  ngOnDestroy() {
    // Unsubscribe from all host/handle level events
    this.unlisteners.forEach(unlisten => unlisten());
  }
}
