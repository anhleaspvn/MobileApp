import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EntryModel } from '../shared/entry-list-model';

export interface aspChip {
  value: any;
  label: string;
}

@Component({
  selector: 'asp-bool-filter',
  templateUrl: './asp-bool-filter.component.html',
  styleUrls: ['./asp-bool-filter.component.scss'],
})
export class aspBoolFilterComponent implements OnInit {

  @Input() chips: aspChip[] | EntryModel[] = [];
  @Input() model!: any;
  @Input() title: string = 'Trạng thái';
  @Input() classList: string[] = [];

  @Output() modelChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onChange(val: any) {
    this.model = val;
    this.modelChange.emit(this.model);
  }

  tagDefaultColor(val: any): string {
    if (this.model == val) return 'asp';
    return '';
  }



}
