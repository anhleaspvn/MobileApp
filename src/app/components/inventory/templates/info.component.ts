import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

import { UtilityService } from '../../../shared/utility.service';

@Component({
  selector: 'app-inventory-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {

  @Input() vm: any;

  constructor(

    private utilityService: UtilityService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

}
