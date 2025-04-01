import { EntryModel } from "../shared/entry-list-model";

export const CommonConstants = {
    MA_CT: {
        NHAP_KHO: 'PN',
        XUAT_KHO: 'PX',
        DIEU_CHUYEN: 'DC'
    },
    STATUS_ENTRIES: [
        { value: '0,1', label: 'Tất cả' },
        { value: '1', label: 'Đã duyệt' },
        { value: '0', label: 'Chưa duyệt' },
    ] as EntryModel[],
    ROLES_ENTRIES: [
        { value: '1,2,3', label: 'Tất cả' },
        { value: '1', label: 'Quản lý' },
        { value: '2', label: 'Văn phòng' },
        { value: '3', label: 'Công nhân' }
    ] as EntryModel[]
};