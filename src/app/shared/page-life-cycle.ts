export interface PageLifeCycle {
    ionViewWillEnter: () => void;
    ionViewDidEnter?: () => void;
    ionViewWillLeave?: () => void;
    ionViewDidLeave?: () => void;
}