import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ApiParameter, UtilityService } from 'src/app/shared';
import { IdentityService, SQLExecService } from 'src/app/core';
import { QcinsService } from '../../data-access/qcins.service';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-filter-stageexs-modal',
  templateUrl: './filter-stageexs-modal.component.html',
  styleUrls: ['./filter-stageexs-modal.component.scss'],
})
export class FilterStageexsModalComponent implements OnInit, OnDestroy {

  model: any;
  loading: boolean = false;
  searchTerm: any = '';
  radioModel: string ='';
  member_Id: string ='';
  stageexs: any[] = [];
  apiParams: ApiParameter = new ApiParameter();

  private searchSubject: Subject<string> = new Subject<string>();
  private searchSub: Subscription;

  constructor(
    private identityService: IdentityService,
    private sqlService: SQLExecService,
    private modalController: ModalController,
    public _utilityService: UtilityService,
    private navParams: NavParams,
    private qcinsService : QcinsService
  ) { }

  ngOnInit() {
    this.searchSub = this.searchSubject
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((term) => {
        this.searchTerm = term;
        this.filterStageExs();
      });

    this.filterStageExs();
  }

  ngOnDestroy() {
    if (this.searchSub) {
      this.searchSub.unsubscribe();
    }
  }

  onSearchChange(event: any) {
    const val = event?.detail?.value ?? event ?? '';
    this.searchSubject.next(val);
  }

  async filterStageExs() {
    this.loading = true;
    const res = await this.qcinsService.GetStageExs('1', this.searchTerm).finally(() => this.loading = false);
    this.stageexs = res;
  }
  
  async onChangeRadio(item) {
    await this.modalController.dismiss(item);
  }

  async closeModal(ok: boolean = false) {
    if (ok) {
      await this.modalController.dismiss(this.model);
    } else {
      await this.modalController.dismiss(null);
    }
  }

}
