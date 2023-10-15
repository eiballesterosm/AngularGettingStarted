import { Component, OnInit } from "@angular/core";
import { IProduct } from "./IProduct";
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    constructor(private productService: ProductService) {

    }

    ngOnInit(): void {
        console.log('ngOnInit');
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
        //Default listFilter value
        //this.listFilter = 'cart';
    }

    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 4;
    showImage: boolean = false;

    private _listFilter: string = '';
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        console.log('In setter: ', value);
        this.filteredProducts = this.performFilter(value);
    }

    filteredProducts: IProduct[] = [];
    products: IProduct[] = [];

    public toogleImage(): void {
        this.showImage = !this.showImage;
    }

    public performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().includes(filterBy));
    }

    public onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}