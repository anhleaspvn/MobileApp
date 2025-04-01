import { VoucherInfo } from "../models/voucher";
import * as _ from "lodash";

export {};
// declare module "../models/voucher" {
//   export interface VoucherInfo {
//     sum_TTienHang(): void;
//     updatePayments(): void;
//   }
// }

// VoucherInfo.prototype.sum_TTienHang = function (this: VoucherInfo) {
//   const po = _.filter(this?.detail, (o) => {
//     return o;
//   });
//   this.header.tTien_Hang = _.sumBy(po, "tien_Nt9");
// };

// VoucherInfo.prototype.updatePayments = function (this: VoucherInfo) {
//   this.header.tTien_Thanhoan =
//     this.header?.tTien_Hang + this.header?.tTien3 - this.header?.tTien4;
// };
