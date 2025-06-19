import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { EmpScanService } from './core/services/empscan.service';
import { IdentityService } from 'src/app/shared/services';
import { BarcodeScanner,BarcodeScannerOptions } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { UtilityService } from "src/app/shared";

@Component({
  selector: 'app-detail-ins-machine',
  templateUrl: './detail-ins-machine.component.html',
  styleUrls: ['./detail-ins-machine.component.scss'],
})
export class DetailInsMachineComponent implements OnInit {
  autoID: any;
  loading: boolean = true;
  userName: any;
  docDate: any;
  lineID: any;
  woDocNo: any;
  productID: any;
  stageID: any;
  stageName: any;
  machineID: any;
  requiredStatus: any;
  materialID: any;
  filterModel: FilterModel = {
    fromDate: moment().startOf('month').format('YYYY-MM-DD'),
    toDate: moment().format('YYYY-MM-DD'),
    top: 10,
  };
  
  // Biến mới
  paramqr: { EmpID: any; EmpName: any; DeptName: any; StartDate: any; CheckInDT: Date; };
  moldToolID: string = ''; // Biến lưu mã khuôn/dao்
  techName: string;
  startTime: Date;
  endTime: Date;
  totalSetupTime: number;
  targetSetupTime: number = 70; // Ví dụ: Máy tự động (70 phút)
  reasonNotes: string = '';
  isMachineReceived: boolean = false; // Trạng thái nhận máy
  isCompleted: boolean = false; // Trạng thái hoàn thành phiếu
  barcodeScannerOptions: BarcodeScannerOptions;
  data: any= []; // Dữ liệu để lưu thông tin
  evaluation: string = ''; // Biến lưu đánh giá
  constructor(
    private route: ActivatedRoute,
    private empScanService: EmpScanService,
    private identityService: IdentityService,
    private barcodeScanner: BarcodeScanner,
    private utilityService: UtilityService
  ) { 
    this.autoID = this.route.snapshot.params.autoID;
  }

  ngOnInit() {
    this.getList();
  }

  async getList(isLoading: boolean = true) {
      this.loading = isLoading;
      this.userName = this.getStrCurrentUser();
      
      const res = await this.empScanService.GetMachineInsByLine(this.userName, this.filterModel.fromDate, this.filterModel.toDate, this.autoID);
      if (res && res.length > 0) {
        this.docDate = res[0].docDate ;
        this.lineID = res[0].lineID ?? '';
        this.woDocNo = res[0].woDocNo ?? '';
        this.productID = res[0].productID ?? '';
        this.stageID = res[0].stageID ?? '';
        this.stageName = res[0].stageName ?? '';
        this.machineID = res[0].machineID ?? '';
        this.requiredStatus = res[0].requiredStatus ?? '';
        this.materialID = res[0].materialID ?? '';
        this.moldToolID = res[0].jigID ?? '';
        this.isMachineReceived = res[0].techApproval ?? false;
        this.techName = res[0].techName ?? '';
        this.startTime = this.parseUTC7Date(res[0].startTime) ? new Date(this.parseUTC7Date(res[0].startTime)) : null;
        this.endTime = this.parseUTC7Date(res[0].endTime) ? new Date(this.parseUTC7Date(res[0].endTime)) : null;
        this.totalSetupTime = res[0].totalSetupTime ?? 0;
        this.targetSetupTime = res[0].targetTime ?? 70; // Mặc định là 70 phút nếu không có dữ liệu
        this.reasonNotes = res[0].notes ?? '';
        this.evaluation = res[0].evaluation ?? '';
        this.isCompleted = res[0].isComplete ?? false; // Trạng thái hoàn thành phiếu

        this.data = res;
        this.calculateSetupTime();
      } else {
        this.data = [];
      }
      this.loading = false;
    }

    private getStrCurrentUser() {
    let strCurrentUser='';
    this.identityService.currentUser.subscribe(res => {
      strCurrentUser = res.Member_ID;
    }); 
    return strCurrentUser;
  }

// Hàm chuyển đổi thời gian sang UTC+7
  getDateInUTC7(): Date {
    const now = new Date();
    const utcOffset = now.getTimezoneOffset(); // Offset của thiết bị (phút)
    const utc7Offset = 7 * 60; // UTC+7 là +7 giờ (420 phút)
    const offsetDifference = utc7Offset - (-utcOffset); // Tính chênh lệch
    return new Date(now.getTime() + offsetDifference * 60 * 1000); // Điều chỉnh thời gian
  }

  // Hàm chuyển đổi chuỗi ISO thành Date với UTC+7
  parseUTC7Date(isoString: string): Date {
    if (!isoString) return null;
    const date = new Date(isoString);
    const utcOffset = date.getTimezoneOffset(); // Offset của thiết bị (phút)
    const utc7Offset = 7 * 60; // UTC+7 là +7 giờ (420 phút)
    const offsetDifference = utc7Offset - (-utcOffset); // Tính chênh lệch
    return new Date(date.getTime() + offsetDifference * 60 * 1000); // Điều chỉnh thời gian
  }

  async scanTechnicianQR(type: string) {
    try {
      const result = await this.barcodeScanner.scan(this.barcodeScannerOptions);
      const qrCode = result.text; // Dữ liệu từ QR Code
      if (qrCode.includes('-')) {
        let result = qrCode.split('-');
        this.paramqr = {
            EmpID: result[0] ?? "",
            EmpName: result[1] ?? "",
            DeptName: result[2] ?? "",
            StartDate: result[3] ?? "",
            CheckInDT: new Date()
        };
      }
      else {
          this.paramqr = {
              EmpID: qrCode,
              EmpName: '',
              DeptName: '',
              StartDate: '',
              CheckInDT: new Date(1900, 1, 1)
          };
      }
      if (type === 'name') {
        this.techName = this.paramqr.EmpID + '_' + this.paramqr.EmpName; // Ghi nhận tên KTV từ QR
        this.data[0].techName = this.techName; // Cập nhật vào data
      } else if (type === 'start') {
        this.startTime = this.getDateInUTC7(); // GმოჁGhi nhận thời gian bắt đầu
        this.data[0].startTime = this.startTime.toISOString(); // Cập nhật vào data
      } else if (type === 'end') {
        this.endTime = this.getDateInUTC7(); // Ghi nhận thời gian kết thúc
        this.data[0].endTime = this.endTime.toISOString(); // Cập nhật vào data
        this.calculateSetupTime(); // Tính tổng thời gian
      }

      this.saveData(); // Lưu thông tin ngay sau khi scan

    } catch (error) {
      console.error('Lỗi khi quét QR:', error);
      alert('Quét QR thất bại. Vui lòng thử lại.');
    }
  }

  calculateSetupTime() {
    if (this.startTime && this.endTime && this.startTime < this.endTime) {
      const diffMs = this.endTime.getTime() - this.startTime.getTime();
      this.totalSetupTime = Math.round(diffMs / (1000 * 60)); // Chuyển sang phút
      this.data[0].totalSetupTime = this.totalSetupTime; // Cập nhật vào data
      this.saveData();
    }
  }

  saveData() {
    
    // Lưu thông tin vào data để gửi lên server
      this.data[0].techApproval = this.isMachineReceived; // Cập nhật trạng thái nhận máy
      this.data[0].startTime = this.startTime ? this.startTime.toISOString() : null; // Chuyển đổi sang ISO string
      this.data[0].endTime = this.endTime ? this.endTime.toISOString() : null; // Chuyển đổi sang ISO string
      this.data[0].jigID = this.moldToolID; // Cập nhật mã khuôn/dao
      this.data[0].notes = this.reasonNotes; // Cập nhật ghi chú
      this.data[0].evaluation = this.evaluation; // Cập nhật đánh giá
      this.data[0].isComplete = this.isCompleted; // Cập nhật trạng thái hoàn thành
      
      this.empScanService.UpdateMachineInsByLine(this.data)
  }

  completeForm() {
    // Kiểm tra các thông tin bắt buộc trước khi hoàn thành
    if (!this.isMachineReceived) {
      alert('Vui lòng tick xác nhận nhận máy trước khi hoàn thành.');
      return;
    }
    if (!this.techName) {
      alert('Vui lòng quét QR để ghi nhận tên kỹ thuật viên.');
      return;
    }
    if (!this.startTime) {
      alert('Vui lòng quét QR để ghi nhận thời gian bắt đầu setup.');
      return;
    }
    if (!this.endTime) {
      alert('Vui lòng quét QR để ghi nhận thời gian kết thúc setup.');
      return;
    }

    // Đánh dấu phiếu hoàn thành
    this.isCompleted = true;
    this.data[0].isComplete = this.isCompleted; // Cập nhật vào data
    this.saveData(); // Lưu lần cuối trước khi khóa
    alert('Phiếu đã được hoàn thành! Thông tin không thể chỉnh sửa nữa.');

   
  }
}
interface FilterModel {
  fromDate: any;
  toDate: any;
  top?: number;
  keyword?: string;
}
