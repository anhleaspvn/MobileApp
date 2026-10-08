import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class QcinsService {
  private urlSegement = {
    GetListQCInspection: "/QcInspection/GetListQCInspection",
    GetListExinsDetail: "/QcInspection/GetListExinsDetail",
    GetListDimDetail: "/QcInspection/GetListDimDetail",
    GetListDimAutoID: "/QcInspection/GetListDimAutoID",
    GetListExinsAutoID: "/QcInspection/GetListExinsAutoID",
    GetPeriodTime: "/QcInspection/GetPeriodTime",
    GetExinsInsInfo: "/QcInspection/GetExinsInsInfo",
    GetWODocNoListByLine: "/QcInspection/GetWODocNoListByLine",
    GetListDetailDefect: "/QcInspection/GetListDetailDefect",
    GetListEditDetailDefect: "/QcInspection/GetListEditDetailDefect",
    GetProdStatus: "/QcInspection/GetProdStatusQC",
    GetCheckState: "/QcInspection/GetCheckStateQC",
    GetCheckList: "/QcInspection/GetCheckListQC",
    GetStageExs: "/QcInspection/GetStageExs",
    GetASPStageExList: "/QcInspection/GetASPStageExList",
    GetASPDeviceList: "/QcInspection/GetASPDeviceList",
    GetDefectList: "/QcInspection/GetDefectListQC",
    SaveHeaderQC: "/QcInspection/SaveHeaderQC",
    SaveExinsQC: "/QcInspection/SaveExinsQC",
    SaveDimQC: "/QcInspection/SaveDimQC",
    SaveDefectExins: "/QcInspection/SaveDefectExins",
    EditDefectExins: "/QcInspection/EditDefectExins",
    DeleteIQCHeader: "/QcInspection/DeleteIQCHeader",
    EditHeaderQC: "/QcInspection/EditHeaderQC",
    DeleteExinsQC: "/QcInspection/DeleteExinsQC",
    DeleteDetailDefect: "/QcInspection/DeleteDetailDefect", 
    DeleteDimQC: "/QcInspection/DeleteDimQC",
    EditDimQC: "/QcInspection/EditDimQC",
    EditExinsQC: "/QcInspection/EditExinsQC",
    CheckExistQRCode: "/QcInspection/CheckExistQRCode",
    CheckUniqueQRCode: "/QcInspection/CheckUniqueQRCode",
    SaveQRCodeScanLog: "/QcInspection/SaveQRCodeScanLog",
    CheckValidQRCode: "/QcInspection/CheckValidQRCode"
  };
  constructor(private http: HttpClient, private apiService: ApiService) {}

  async GetListQCInspection(headerID: any, fromDate: any, toDate: any, searchTerm: any): Promise<any> {
    const params = {
      headerID: headerID,
      fromDate : fromDate,
      toDate : toDate,
      searchTerm: searchTerm
    };
    const res = await this.apiService.post(this.urlSegement.GetListQCInspection, params);
    return res;
  }

  async GetListExinsDetail(headerID: any): Promise<any> {
    const params = {
     headerID: headerID
    };
    
    const res = await this.apiService.post(this.urlSegement.GetListExinsDetail, params);
    return res;
  }

  async GetListDimDetail(headerID: any): Promise<any> {
    const params = {
     headerID: headerID
    };
    const res = await this.apiService.post(this.urlSegement.GetListDimDetail, params);
    return res;
  }

  async GetListDetailDefect(headerID: any, iqcCheckID: any): Promise<any> {
    const params = {
      headerID: headerID,
      iqcCheckID: iqcCheckID
    };
    const res = await this.apiService.post(this.urlSegement.GetListDetailDefect, params);
    return res;
  }

  async GetListEditDetailDefect(headerID: any, iqcCheckID: any, defectID: any): Promise<any> {
    const params = {
      headerID: headerID,
      iqcCheckID: iqcCheckID,
      defectID: defectID
    };
    const res = await this.apiService.post(this.urlSegement.GetListEditDetailDefect, params);
    return res;
  }

  async GetListDimAutoID(headerID: any, autoID: any): Promise<any> {
    const params = {
     headerID: headerID,
     autoID: autoID
    };
    const res = await this.apiService.post(this.urlSegement.GetListDimAutoID, params);
    return res;
  }

  async GetListExinsAutoID(headerID: any, autoID: any): Promise<any> {
    const params = {
     headerID: headerID,
     autoID: autoID
    };
    const res = await this.apiService.post(this.urlSegement.GetListExinsAutoID, params);
    return res;
  }

  async GetPeriodTime(shiftID?: any, checkType?: any): Promise<any> {
    const params = {
      shiftID: shiftID || 'DayShift',
      checkType: checkType || ''
    };
    const res = await this.apiService.post(this.urlSegement.GetPeriodTime, params);
    return res;
  }


  async GetExinsInsInfo(headerId: any): Promise<any> {
    const params = {
      headerId : headerId
    };
    const res = await this.apiService.post(this.urlSegement.GetExinsInsInfo, params);
    return res;
  }

  async GetWODocNoListByLine(id: any, searchTerm: any): Promise<any> {
    const params = {
      id : id,
      searchTerm: searchTerm
    };
    const res = await this.apiService.post(this.urlSegement.GetWODocNoListByLine, params);
    return res;
  }
  async GetProdStatusQC(id: any): Promise<any> {
    const params = {
      id : id
    };
    const res = await this.apiService.get(this.urlSegement.GetProdStatus);
    return res;
  }
  async GetCheckStateQC(id: any): Promise<any> {
    const params = {
      id : id
    };
    const res = await this.apiService.get(this.urlSegement.GetCheckState);
    return res;
  }

  async GetCheckListQC(id: any): Promise<any> {
    const params = {
      id : id
    };
    const res = await this.apiService.get(this.urlSegement.GetCheckList);
    return res;
  }

  async GetDefectListQC(id: any): Promise<any> {
    const params = {
      id : id
    };
    const res = await this.apiService.get(this.urlSegement.GetDefectList);
    return res;
  }

  async GetStageExs(id: any, searchTerm: any): Promise<any> {
    const params = {
      id : id,
      searchTerm: searchTerm
    };
    const res = await this.apiService.post(this.urlSegement.GetStageExs, params);
    return res;
  }

  async GetASPStageExList(searchTerm: any): Promise<any> {
    const params = {
      searchTerm: searchTerm
    };
    const res = await this.apiService.post(this.urlSegement.GetASPStageExList, params);
    return res;
  }

  async GetASPDeviceList(searchTerm: any): Promise<any> {
    const params = {
      searchTerm: searchTerm
    };
    const res = await this.apiService.post(this.urlSegement.GetASPDeviceList, params);
    return res;
  }

  async SaveHeaderQC(woDocNo: any, docDate: any, prodStatus: any, qcID: any, checkState: any, createdBy: any, createdDate: any, idempotencyKey?: string): Promise<any> {
    const params = {
      woDocNo : woDocNo,
      docDate: docDate,
      prodStatus: prodStatus,
      qcID: qcID,
      checkState: checkState,
      createdBy: createdBy,
      createdDate: createdDate
    };
    const res = await this.apiService.post(this.urlSegement.SaveHeaderQC, params, { idempotencyKey });
    return res;
  }

  async EditHeaderQC(headerID: any, prodStatus: any, qcID: any, checkState: any, lastmodifiedBy: any, lastmodifiedDate: any): Promise<any> {
    const params = {
      headerID: headerID,
      prodStatus: prodStatus,
      qcID: qcID,
      checkState: checkState,
      lastmodifiedBy: lastmodifiedBy,
      lastmodifiedDate: lastmodifiedDate
    };
    const res = await this.apiService.post(this.urlSegement.EditHeaderQC, params);
    return res;
  }

  async EditDimQC(autoID:any, iqcCheckID: any, iqcDFID: any, iqcStandardMin: any, iqcStandardMax: any,
    iqcEvalueActual: any, iqcEvalueResult: any, iqcEvalueCheckTime: any, iqcCheckingContent: any,
    iqcDeviceID: any, iqcMeasuringToolID: any, iqcShiftID: any, lastmodifiedBy: any, lastmodifiedDate: any, iqcCheckName: any, iqcCutterID?: any, checkState?: any): Promise<any>{
    const params = {
      autoID: autoID,
      iqcCheckID : iqcCheckID,
      iqcCheckName: iqcCheckName,
      iqcDFID: iqcDFID,
      iqcStandardMin: iqcStandardMin,
      iqcStandardMax: iqcStandardMax,
      iqcEvalueActual: iqcEvalueActual,
      iqcEvalueResult: iqcEvalueResult,
      iqcEvalueCheckTime: iqcEvalueCheckTime,
      iqcCheckingContent: iqcCheckingContent,
      iqcDeviceID: iqcDeviceID,
      iqcMeasuringToolID: iqcMeasuringToolID,
      lastmodifiedBy: lastmodifiedBy,
      iqcShiftID: iqcShiftID,
      lastmodifiedDate: lastmodifiedDate,
      iqcCutterID: iqcCutterID,
      checkState: checkState
    };
    
    const res = await this.apiService.post(this.urlSegement.EditDimQC, params);
    return res;
  }

  async EditExinsQC(autoID: any, iqcCheckID: any, iqcCheckCont: any, iqcTemplateQuantity: any,
                    iqcEvalueResult: any, iqcPeriodTime: any, iqcShiftID: any, lastModifiedBy: any, lastModifiedDate: any, iqcCheckName?: any, checkState?: any): Promise<any>{
    const params = {
      autoID: autoID,
      iqcCheckID: iqcCheckID,
      iqcCheckCont: iqcCheckCont,
      iqcTemplateQuantity: iqcTemplateQuantity,
      iqcEvalueResult: iqcEvalueResult,
      iqcPeriodTime: iqcPeriodTime,
      iqcShiftID: iqcShiftID,
      lastModifiedBy: lastModifiedBy,
      lastModifiedDate: lastModifiedDate,
      iqcCheckName: iqcCheckName,
      checkState: checkState
    };

    const res = await this.apiService.post(this.urlSegement.EditExinsQC, params);
    return res;
  }

  async SaveExinsQC(headerID: any, iqcCheckID: any, iqcCheckCont: any, iqcTemplateQuantity: any, iqcEvalueResult: any
    ,iqcPeriodTime: any, iqcDefect: any, iqcShiftID: any, createdBy: any, createdDate: any, iqcCheckName?: any, checkState?: any, idempotencyKey?: string
  ):Promise<any>{
    const params = {
      headerID : headerID,
      iqcCheckID: iqcCheckID,
      iqcCheckCont: iqcCheckCont,
      iqcTemplateQuantity: iqcTemplateQuantity,
      iqcEvalueResult: iqcEvalueResult,
      iqcPeriodTime: iqcPeriodTime,
      iqcDefect: iqcDefect,
      iqcShiftID: iqcShiftID,
      createdBy: createdBy,
      createdDate: createdDate,
      iqcCheckName: iqcCheckName,
      checkState: checkState
    };
    const res = await this.apiService.post(this.urlSegement.SaveExinsQC, params, { idempotencyKey });
    return res;
  }

  async SaveDefectExins(headerID: any, iqcCheckID: any, defectID: any, defectQuantity: any, defectDescription: any, createdBy: any, createdDate: any, parentAutoID?: any, idempotencyKey?: string):Promise<any>{
    const params = {
      headerID: headerID,
      iqcCheckID: iqcCheckID,
      defectID: defectID,
      defectQuantity: defectQuantity,
      defectDescription: defectDescription,
      createdBy: createdBy,
      createdDate: createdDate,
      parentAutoID: parentAutoID
    }

    const res = await this.apiService.post(this.urlSegement.SaveDefectExins, params, { idempotencyKey });
    return res;
  }

  async EditDefectExins(headerID: any, iqcCheckID: any, defectID: any, defectQuantity: any, defectDescription: any):Promise<any>{
    const params = {
      headerID: headerID,
      iqcCheckID: iqcCheckID,
      defectID: defectID,
      defectQuantity: defectQuantity,
      defectDescription: defectDescription
    }

    const res = await this.apiService.post(this.urlSegement.EditDefectExins, params);
    return res;
  }

  async SaveDimQC(headerID: any, iqcCheckID: any, iqcDFID: any, iqcStandardMin: any, iqcStandardMax: any,
          iqcEvalueActual1: any, iqcEvalueActual2: any, iqcEvalueActual3: any, iqcEvalueActual4: any, iqcEvalueActual5: any, 
          iqcEvalueResult: any, iqcEvalueCheckTime: any, iqcCheckingContent: any,
          iqcDeviceID: any, iqcMeasuringToolID: any, iqcShiftID: any, createdBy: any, createdDate: any, iqcCheckName: any, iqcCutterID?: any, checkState?: any, isNewGroup?: boolean, idempotencyKey?: string):Promise<any>{
    const params = {
      headerID: headerID,
      iqcCheckID: iqcCheckID,
      iqcCheckName: iqcCheckName,
      iqcDFID: iqcDFID,
      iqcStandardMin: iqcStandardMin,
      iqcStandardMax: iqcStandardMax,
      iqcEvalueActual1: iqcEvalueActual1,
      iqcEvalueActual2: iqcEvalueActual2,
      iqcEvalueActual3: iqcEvalueActual3,
      iqcEvalueActual4: iqcEvalueActual4,
      iqcEvalueActual5: iqcEvalueActual5,
      iqcEvalueResult: iqcEvalueResult,
      iqcEvalueCheckTime: iqcEvalueCheckTime,
      iqcCheckingContent: iqcCheckingContent,
      iqcDeviceID: iqcDeviceID,
      iqcMeasuringToolID: iqcMeasuringToolID,
      iqcShiftID: iqcShiftID,
      createdBy: createdBy,
      createdDate: createdDate,
      iqcCutterID: iqcCutterID,
      checkState: checkState,
      isNewGroup: isNewGroup
    }
    const res = await this.apiService.post(this.urlSegement.SaveDimQC, params, { idempotencyKey });
    return res;
  }

  async DeleteIQCHeader(item: any): Promise<any> {
    const params = {
      item : item
    };
    const res = await this.apiService.post(this.urlSegement.DeleteIQCHeader, params);
    return res;
  }

  async DeleteExinsQC(item: any): Promise<any> {
    const params = {
      item : item
    };
    const res = await this.apiService.post(this.urlSegement.DeleteExinsQC, params);
    return res;
  }

  async DeleteDetailDefect(item: any): Promise<any> {
    const params = {
      item : item
    };
    const res = await this.apiService.post(this.urlSegement.DeleteDetailDefect, params);
    return res;
  }

  async DeleteDimQC(item: any): Promise<any> {
    const params = {
      item : item
    };
    const res = await this.apiService.post(this.urlSegement.DeleteDimQC, params);
    return res;
  }

  async CheckExistQRCode(qrCode: any): Promise<any> {
    const params = {
      qrCode : qrCode
    };
    const res = await this.apiService.post(this.urlSegement.CheckExistQRCode, params);
    return res;
  }

  async CheckUniqueQRCode(qrCode: any): Promise<any> {
    const params = {
      qrCode : qrCode
    };
    const res = await this.apiService.post(this.urlSegement.CheckUniqueQRCode, params);
    return res;
  }

  async SaveQRCodeScanLog(payload: any): Promise<any> {
    const params = {
      payload : payload
    };
    const res = await this.apiService.post(this.urlSegement.SaveQRCodeScanLog, params);
    return res;
  }

  async CheckValidQRCode(woDocNo: any, qrCode: any): Promise<any> {
    const params = {
      woDocNo : woDocNo,
      qrCode: qrCode
    };
    const res = await this.apiService.post(this.urlSegement.CheckValidQRCode, params);
    return res;
  }
}
