import { Color, ScaleType } from '@swimlane/ngx-charts';
import { environment } from 'src/environments/environment';

class SwimlaneChartConfig {
    view: [number, number] = [innerWidth, 500];
    gradient: boolean = true;
    showLegend: boolean = true;
    showLabels: boolean = true;
    showXAxis: boolean = true;
    showYAxis: boolean = true;
    showXAxisLabel: boolean = false;
    showGridLines: boolean = true;
    showYAxisLabel: boolean = false;
    xAxisLabel: string = '';
    isDoughnut: boolean = false;
}

export class SwimlaneAdvancedPieChartConfig extends SwimlaneChartConfig {
    view: [number, number] = [600, 500]
    scheme: string = 'forest';
    schemeType: ScaleType = ScaleType.Linear;
    colorScheme: Color = {
        name: 'forest',
        group: ScaleType.Linear,
        selectable: true,
        domain: [environment.baseColor, '#f9211b', '#C7B42C', '#AAAAAA'] as string[]
    };
}

export class SwimlaneBarHorizontalChartConfig extends SwimlaneChartConfig {
    view: [number, number] = [innerWidth, 500];
    scheme: string = 'ocean';
    schemeType:ScaleType = ScaleType.Ordinal;
}

export interface SwimlaneChartData {
    name: string;
    value: number
}