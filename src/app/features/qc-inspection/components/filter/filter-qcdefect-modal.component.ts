import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ApiParameter, UtilityService } from 'src/app/shared';
import { IdentityService, SQLExecService } from 'src/app/core';
import { QcinsService } from '../../data-access/qcins.service';

@Component({
  selector: 'app-filter-qcdefect-modal',
  templateUrl: './filter-qcdefect-modal.component.html',
  styleUrls: ['./filter-qcdefect-modal.component.scss'],
})
export class FilterQcdefectModalComponent implements OnInit {
  loading: boolean = false;
  searchTerm: string = '';
  radioModel: string = '';

  defects: any[] = [];
  selectedDefect: any = null;

  constructor(
    private identityService: IdentityService,
    private sqlService: SQLExecService,
    private modalController: ModalController,
    public _utilityService: UtilityService,
    private navParams: NavParams,
    private qcinsService: QcinsService
  ) {}

  ngOnInit() {
    this.filterDefect();
  }

  async filterDefect() {
    this.loading = true;
    try {
      const res = await this.qcinsService.GetDefectListQC('1');
      this.defects = res || [];
    } finally {
      this.loading = false;
    }
  }

  onRadioChange(event: any) {
  const defectID = event.detail.value;

  this.selectedDefect = this.defects.find(
    d => d.defectID === defectID
  ) || null;
}
  async closeModal() {
    if (!this.selectedDefect) {
      await this.modalController.dismiss(null, 'cancel');
      return;
    }

    await this.modalController.dismiss(
      {
        defectID: this.selectedDefect.defectID,
        defectName: this.selectedDefect.defectName
      },
      'confirm'
    );
  }
}

