import { Injectable } from "@angular/core";
import * as _ from "lodash";
import * as moment from "moment";

export class VoucherInfo {
  private _headerDefaultValue = {
    ngay_Ct: moment().format("YYYY-MM-DD"),
    tTien_Hang: 0,
    tTien4: 0,
    chiet_Khau: 0,
    tTien_PhuPhi: 0,
    tTien_ThanhToan: 0,
    tTien3: 0,
    ma_Thue: "",
    thue_GtGt: 0,
  };

  header: any;
  detail: any[];

  constructor();
  constructor(_header?: any, _detail?: any[]);
  constructor(_header?: any, _detail?: any[]) {
    this.header = _header ?? this._headerDefaultValue;
    this.detail = _detail ?? [];
  }
}


//
interface IVoucherConfigs {
  sum_TTienHang: (model: VoucherInfo) => void;
  updatePayments: (model: VoucherInfo) => void;
}

@Injectable({
  providedIn: "root",
})
export class VoucherHelperService implements IVoucherConfigs {
  constructor() {}

  public sum_TTienHang(model: VoucherInfo) {
    const po = _.filter(model?.detail, (o) => {
      return !o.is_HangTang;
    },);//Dùng thế này khi cần check thêm (if else) nhiều dk trong hàm return

    model.header = Object.assign(new VoucherInfo(), model?.header, {
      tTien_Hang: _.sumBy(po, "tien_Nt9"),
    });
  }

  public updatePayments(model: VoucherInfo) {
    model.header = Object.assign(new VoucherInfo(), model?.header, {
      tTien_ThanhToan:
        (model?.header?.tTien_Hang || 0) +
        (model?.header?.tTien3 || 0) -
        (model?.header?.tTien4 || 0),
    });
  }
}
