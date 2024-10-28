import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { aspBarHorizontalChartComponent } from './asp-bar-horizontal-chart.component';

describe('aspBarHorizontalChartComponent', () => {
  let component: aspBarHorizontalChartComponent;
  let fixture: ComponentFixture<aspBarHorizontalChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ aspBarHorizontalChartComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(aspBarHorizontalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
