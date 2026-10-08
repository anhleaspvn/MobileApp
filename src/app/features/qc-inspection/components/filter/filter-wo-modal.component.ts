import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ApiParameter, UtilityService } from 'src/app/shared';
import { IdentityService, SQLExecService } from 'src/app/core';
import { QcinsService } from '../../data-access/qcins.service';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-filter-wo-modal',
  templateUrl: './filter-wo-modal.component.html',
  styleUrls: ['./filter-wo-modal.component.scss'],
})
export class FilterWoModalComponent implements OnInit, OnDestroy {
  model: any;
  loading: boolean = false;
  searchTerm: any = '';
  radioModel: string ='';
  member_Id: string ='';
  wos: any[] = [];
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
        this.filterWOs();
      });

    this.filterWOs();
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

  async filterWOs() {
    this.loading = true;
    const res = await this.qcinsService.GetWODocNoListByLine('1', this.searchTerm).finally(() => this.loading = false);
    this.wos = res;
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
