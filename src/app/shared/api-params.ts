import { CommandType } from "../helpers";

export class ApiParameter {
    //SQLGetDataTable
    strTableName: string;
    strColumnLst: string;
    strKey: string;
    strOrder: string;
    strQuery: string;

    //SQLGetNameByCode
    strFieldCode: string;
    strFieldName: string;
    strCodeValue: string;

    //SQLGetDataRowByID, SQLDelete
    strColumnID: string;
    strValue: string;
    paraList: any = {Member_Id:''};

    //SQLDelete        

    //SQLUpdate
    new_Edit: string;
    jSonRow: string;

    //SQLCheckDuplicate                 
    //SQLCheckExist        
    strColumnName: string;
    objValue: any;

    //Execute 
    strSQLExec: string;

    cmdType: string;
    mesg: string;


    constructor();
    constructor(params: IApiParameter);
    constructor(params?: IApiParameter) {
        this.strSQLExec = params && params.strSQLExec;
        this.paraList = params && params.paraList
        this.cmdType = params && params.cmdType || CommandType.StoredProcedure;
        this.strQuery = params && params.strQuery;
    }                
}
interface IApiParameter {
    paraList?: any;
    strSQLExec: string;
    strQuery?: string;
    cmdType?: CommandType;
}