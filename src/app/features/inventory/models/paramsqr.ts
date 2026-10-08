export class ParamsQR {
    MA_VT?: string = '';
    MA_LO?: string ='';
    $HAN_SD?: any;
    $NGAY_SX?: any;
    MA_KHO?: string = '';
    SO_LUONG?: number = 0;

    get HAN_SD() {
        return this.$HAN_SD ? this.$HAN_SD : '';
    }
    get NGAY_SX() { 
        return this.$NGAY_SX ? this.$NGAY_SX : '';
    }
}