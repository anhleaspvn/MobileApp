import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "displayColumns",
})
export class DisplayColumnsPipe implements PipeTransform {
  transform(cols: any[], key: string = "column_ID"): string[] {
    const displayedColumns= cols?.map((col) => col[key]);
    return displayedColumns;
  }
}
