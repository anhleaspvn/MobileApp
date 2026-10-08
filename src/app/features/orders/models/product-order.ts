export class ProductOrder {

    quantity: number;
    price: number;
    discount: number;
    product: any;
    discountValue: number;
    promotionCodes: string[];

    get total(): number {
        return this.quantity * this.price;
    }

    set total(val: number) {
        this.total = val;
    }
}