import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services';

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
    GetExinsInsInfo: "/QcInspection/GetExinsInsInfo",
    GetWODocNoListByLine: "/QcInspection/GetWODocNoListByLine",
    GetListDetailDefect: "/QcInspection/GetListDetailDefect",
    GetProdStatus: "/QcInspection/GetProdStatusQC",
    GetCheckState: "/QcInspection/GetCheckStateQC",
    GetCheckList: "/QcInspection/GetCheckListQC",
    GetStageExs: "/QcInspection/GetStageExs",
    GetDefectList: "/QcInspection/GetDefectListQC",
    SaveHeaderQC: "/QcInspection/SaveHeaderQC",
    SaveExinsQC: "/QcInspection/SaveExinsQC",
    SaveDimQC: "/QcInspection/SaveDimQC",
    SaveDefectExins: "/QcInspection/SaveDefectExins",
    DeleteIQCHeader: "/QcInspection/DeleteIQCHeader",
    EditHeaderQC: "/QcInspection/EditHeaderQC",
    DeleteExinsQC: "/QcInspection/DeleteExinsQC",
    DeleteDetailDefect: "/QcInspection/DeleteDetailDefect", 
    DeleteDimQC: "/QcInspection/DeleteDimQC",
    EditDimQC: "/QcInspection/EditDimQC",
    EditExinsQC: "/QcInspection/EditExinsQC"
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

  async SaveHeaderQC(woDocNo: any, docDate: any, prodStatus: any, qcID: any, checkState: any, createdBy: any, createdDate: any): Promise<any> {
    const params = {
      woDocNo : woDocNo,
      docDate: docDate,
      prodStatus: prodStatus,
      qcID: qcID,
      checkState: checkState,
      createdBy: createdBy,
      createdDate: createdDate
    };
    const res = await this.apiService.post(this.urlSegement.SaveHeaderQC, params);
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
    iqcDeviceID: any, iqcMeasuringToolID: any, lastmodifiedBy: any, lastmodifiedDate: any): Promise<any>{
    const params = {
      autoID: autoID,
      iqcCheckID : iqcCheckID,
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
      lastmodifiedDate: lastmodifiedDate
    };
    
    const res = await this.apiService.post(this.urlSegement.EditDimQC, params);
    return res;
  }

  async EditExinsQC(autoID: any, iqcCheckID: any, iqcCheckCont: any, iqcTemplateQuantity: any,
                    iqcEvalueResult: any, iqcPeriodTime: any, lastModifiedBy: any, lastModifiedDate: any): Promise<any>{
    const params = {
      autoID: autoID,
      iqcCheckID: iqcCheckID,
      iqcCheckCont: iqcCheckCont,
      iqcTemplateQuantity: iqcTemplateQuantity,
      iqcEvalueResult: iqcEvalueResult,
      iqcPeriodTime: iqcPeriodTime,
      lastModifiedBy: lastModifiedBy,
      lastModifiedDate: lastModifiedDate
    };

    const res = await this.apiService.post(this.urlSegement.EditExinsQC, params);
    return res;
  }

  async SaveExinsQC(headerID: any, iqcCheckID: any, iqcCheckCont: any, iqcTemplateQuantity: any, iqcEvalueResult: any
    ,iqcPeriodTime: any, iqcDefect: any, createdBy: any, createdDate: any
  ):Promise<any>{
    const params = {
      headerID : headerID,
      iqcCheckID: iqcCheckID,
      iqcCheckCont: iqcCheckCont,
      iqcTemplateQuantity: iqcTemplateQuantity,
      iqcEvalueResult: iqcEvalueResult,
      iqcPeriodTime: iqcPeriodTime,
      iqcDefect: iqcDefect,
      createdBy: createdBy,
      createdDate: createdDate
    };
    const res = await this.apiService.post(this.urlSegement.SaveExinsQC, params);
    return res;
  }

  async SaveDefectExins(headerID: any, iqcCheckID: any, defectID: any, defectQuantity: any, createdBy: any, createdDate: any):Promise<any>{
    const params = {
      headerID: headerID,
      iqcCheckID: iqcCheckID,
      defectID: defectID,
      defectQuantity: defectQuantity,
      createdBy: createdBy,
      createdDate: createdDate
    }

    const res = await this.apiService.post(this.urlSegement.SaveDefectExins, params);
    return res;
  }

  async SaveDimQC(headerID: any, iqcCheckID: any, iqcDFID: any, iqcStandardMin: any, iqcStandardMax: any,
          iqcEvalueActual1: any, iqcEvalueActual2: any, iqcEvalueActual3: any, iqcEvalueActual4: any, iqcEvalueActual5: any, 
          iqcEvalueResult: any, iqcEvalueCheckTime: any, iqcCheckingContent: any,
          iqcDeviceID: any, iqcMeasuringToolID: any, createdBy: any, createdDate: any):Promise<any>{
    const params = {
      headerID: headerID,
      iqcCheckID: iqcCheckID,
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
      createdBy: createdBy,
      createdDate: createdDate
    }
    const res = await this.apiService.post(this.urlSegement.SaveDimQC, params);
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
}
