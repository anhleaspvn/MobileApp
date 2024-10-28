import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CommandType, enuEdit } from 'src/app/helpers';
import { VoucherHelperService, VoucherInfo } from 'src/app/models/voucher';
import { UtilityService } from 'src/app/shared/utility.service';
import { ActivatedRoute, Router } from '@angular/router';

import {
  DataToolService,
  IdentityService,
  SQLExecService,
  VoucherService,
} from '../../shared/services';
import * as moment from 'moment';
import { ApiParameter } from 'src/app/shared/api-params';
import * as _ from 'lodash';
import { MatStepper } from '@angular/material/stepper';

import { BehaviorSubject } from 'rxjs';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { OrderService } from './core';

@Component({
  selector: 'app-imports-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit, OnDestroy {
  strTitle: string = 'Tạo mới';
  today: any = new Date();
  apiParams: ApiParameter = new ApiParameter();

  linner: boolean = true;
  submitting: boolean = false;
  enuEdit: enuEdit = enuEdit.New;
  stt: string;
  strMaCt: string;
  strMa_Ct_Convert: string;

  listMa_Thue: any[];

  is_VAT: boolean = false;
  @ViewChild('stepper') public myStepper: MatStepper;

  currencyMask: any = {
    align: 'right',
    allowNegative: true,
    allowZero: true,
    decimal: ',',
    precision: 0,
    prefix: '',
    suffix: '',
    thousands: '.',
    nullable: false,
  };

  model: VoucherInfo = new VoucherInfo();

  constructor(
    private voucherHelperService: VoucherHelperService,
    private identityService: IdentityService,
    private voucherService: VoucherService,
    private orderService: OrderService,
    private modalController: ModalController,
    private utilityService: UtilityService,

    private router: Router,
    private route: ActivatedRoute,
    private sqlService: SQLExecService
  ) { }

  ngOnDestroy(): void { }

  ionViewDidLeave() {
    this.myStepper.selectedIndex = 0;
    this.enuEdit = enuEdit.New;
    this.model = new VoucherInfo();
  }

  ionViewWillEnter() {
    this.strMaCt = this.route.snapshot.params.maCt;
    this.route.queryParams.subscribe((params) => {
      this.stt = params['stt'];
      this.enuEdit = Number(params['enuEdit']);

      if (this.enuEdit != enuEdit.Convert) this.strMa_Ct_Convert = this.strMaCt;
      else this.strMa_Ct_Convert = params['maCt_Convert'];
    });
  }

  ionViewDidEnter() {
    this.get_listDMTHUE();

    if (this.enuEdit == enuEdit.Edit) this.strTitle = 'Sửa phiếu';

    if (this.enuEdit != enuEdit.New)
      setTimeout(() => {
        this.getVoucher().finally();
      }, 20);
  }

  ngOnInit(): void { }

  async getVoucher() {
    const res = await this.voucherService.getVoucher(
      this.stt,
      this.enuEdit == enuEdit.Edit ? this.strMaCt : this.strMa_Ct_Convert
    );

    if (this.enuEdit == enuEdit.Convert) {
      Object.assign(res.table[0], {
        so_Ct: '',
      });
    }

    this.model = Object.assign({}, this.model, {
      header: Object.assign(this.model.header, res?.table[0]),
      detail: res?.table1 ?? [],
    });
  }

  private async get_listDMTHUE() {
    const res = await this.orderService.GetDMTHUE(2);
    this.listMa_Thue = res;
  }

  async onSubmit() {
    this.submitting = true;
    const voucher: VoucherInfo = Object.assign(this.model, {
      header: Object.assign(this.model.header, {
        ngay_Ct: moment(this.model.header.ngay_Ct).format('YYYY-MM-DD'),
        MA_CT: this.strMa_Ct_Convert,
        STT: this.enuEdit != enuEdit.Edit ? '' : this.model.header.STT,
      }),
    });

    const res = await this.orderService
      .SaveSO(voucher, this.enuEdit)
      .finally(() => (this.submitting = false));

    if (res) {
      this.utilityService.showToast('Lưu thành công');
      this.router.navigateByUrl(
        'components/order/detail/' + res + '/' + this.strMa_Ct_Convert
      );
    }
  }

  resetInfo() {
    this.model.header = Object.create(null);
  }

  FormCheckValid() {
    return false;
  }

  stepperClicked(stepper: MatStepper) {
    stepper.next();
  }

  selectStepByIndex(index: number): void {
    if (index == 2 && this.model.header.chiet_Khau>0) {
      this.chiet_Khau_Change();
    }
    // if ((index = 2)) {// ???
    //   this.chiet_Khau_Change();
    // }
  }

  chiet_Khau_Change(event: any =0) {
    if (this.model.header.chiet_Khau > 100 || this.model.header.chiet_Khau < 0)
      this.model.header.chiet_Khau = 0;
    this.model.header.tTien4 = (this.model.header.tTien_Hang * this.model.header.chiet_Khau) / 100;
    this.ma_Thue_Change();
  }

  ttien4_Change(event: any =0) {
    if (this.model.header.tTien4 > this.model.header.tTien_Hang)
      this.model.header.tTien4 = 0;

    this.model.header.chiet_Khau = (this.model.header.tTien4 * 100) / this.model.header.tTien_Hang;
    this.ma_Thue_Change();

  }

  ma_Thue_Change() {
    this.voucherHelperService.sum_TTienHang(this.model);
    const res = this.listMa_Thue.find(
      (x) => x.ma_Thue === this.model.header.ma_Thue
    );
    if (res) {
      this.model.header.thue_GtGt = res.thue_Suat;
      this.model.header.tTien3 =
        (this.model.header.tTien_Hang - this.model.header.tTien4) *
        (this.model.header.thue_GtGt / 100);

      if (res.gia_Thue == "1")
        this.model.header.tTien_Hang = this.model.header.tTien_Hang - this.model.header.tTien3;
    } else {
      this.model.header.ma_Thue = '';
      this.model.header.thue_GtGt = 0;
    }
    this.voucherHelperService.updatePayments(this.model);
  }
}
