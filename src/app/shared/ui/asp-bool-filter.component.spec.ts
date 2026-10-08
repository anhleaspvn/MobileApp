import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { aspBoolFilterComponent } from './asp-bool-filter.component';

describe('aspBoolFilterComponent', () => {
  let component: aspBoolFilterComponent;
  let fixture: ComponentFixture<aspBoolFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ aspBoolFilterComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(aspBoolFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
