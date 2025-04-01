import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiParameter, UtilityService } from 'src/app/shared';
import { aspPermission } from 'src/app/shared/services';
import { QcinsService } from './core/services/qcins.service';
import { AppConfig, CommandType } from 'src/app/helpers';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  perm: aspPermission = Object.create(null);
  segment: string = 'info';
  apiParams: ApiParameter = new ApiParameter();
  headerID: any;
  vm: any = {};
  data: any[]=[];
  loading: boolean = true;
  submitting: boolean = false;
  constructor(
    private alertController: AlertController,
    private utilityService: UtilityService,
    private route: ActivatedRoute,
    private router: Router,
    private qcinsService: QcinsService,
  ) { 
    this.headerID = this.route.snapshot.params.headerID;

    route.data.subscribe((data) =>{
      return this.perm = data[AppConfig.PERM_RESOLVER_KEY];
    })
  }

  ngOnInit() {}
}
