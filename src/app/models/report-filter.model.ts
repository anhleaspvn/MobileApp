import { dateInputsHaveChanged } from "@angular/material/datepicker/datepicker-input-base";

export class ReportFilter {
    keyword: string = '';
    top: number = 50;
    ngay_Ct:  any ;
    endDate:  any ;
    startDate: any ;
    customer: EntryModel[];
    areas: EntryModel[];
    depts: EntryModel[];
    emps: EntryModel[];
    areasname: EntryModel[];
    deptsname: EntryModel[];
    empsname: EntryModel[];
    warehouses: EntryModel[];
    groupsproduct: EntryModel[];
    products: EntryModel[];
    cont : EntryModel[];
    warehousesname: EntryModel[];
    groupsproductname: EntryModel[];
    productsname: EntryModel[];
    customername: EntryModel[];
    contname : EntryModel[];
    kien : EntryModel[];
    kieu_nh: any ='';
    kieu_th: any ='';
    so_Ct_SO: any='';
    so_Ct_KHSX: any='';
    so_Ct_LSX: any='';
    trang_Thai: any='';
    column : EntryModel[];
    sources: SourceModel = new SourceModel();
    status: StatusModel = new StatusModel();
}

export class LayoutReport {
    chon_ngay: boolean = false;
    ngay_ct: boolean = false;
    area: boolean = false;
    dept: boolean = false;
    customer: boolean = false;
    employees: boolean = false;
    warehouse: boolean = false;
    groupsproduct: boolean = false;
    products: boolean = false;
    cont: boolean = false;
    kien: boolean = false;
    kieu_nh: boolean = false;
    kieu_th: boolean = false;
    so_Ct_SO: boolean = false;
    so_Ct_KHSX: boolean = false;
    so_Ct_LSX: boolean = false;
    trang_Thai: boolean = false;
}

export class EntryModel {
    value: string;
    label: string;

    constructor();
    constructor(obj: IEntryModel);
    constructor(obj?: IEntryModel) {
        this.value = obj && obj.value || '';
        this.label = obj && obj.label || '';
    }
}

export class SourceModel {
    mobile: boolean;
    windown: boolean;

    constructor();
    constructor(obj: ISourceModel);
    constructor(obj?: ISourceModel) {
        this.mobile = obj && obj.mobile || false;
        this.windown = obj && obj.windown || false;
    }
}

export class StatusModel {
    approved: boolean;
    returned: boolean;

    constructor();
    constructor(obj: IStatusModel);
    constructor(obj?: IStatusModel) {
        this.approved = obj && obj.approved || null;
        this.returned = obj && obj.returned || null;
    }
}

interface ISourceModel {
    mobile?: boolean;
    windown?: boolean;
}

interface IStatusModel {
    approved?: boolean;
    returned?: boolean;
}

interface IEntryModel {
    value?: string;
    label?: string;
}

