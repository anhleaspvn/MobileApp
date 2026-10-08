import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { aspAdvancedPieChartComponent } from './asp-advanced-pie-chart.component';

describe('aspAdvancedPieChartComponent', () => {
  let component: aspAdvancedPieChartComponent;
  let fixture: ComponentFixture<aspAdvancedPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ aspAdvancedPieChartComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(aspAdvancedPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
