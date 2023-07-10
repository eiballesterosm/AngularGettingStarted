import { Component, OnInit } from "@angular/core";
import { IProduct } from "./IProduct";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    ngOnInit(): void {
        console.log('ngOnInit');
        //Default listFilter value
        this.listFilter = 'cart';
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

    products: IProduct[] = [
        {
            "productId": 1,
            "productName": "Garden Cart",
            "productCode": "CODE-0001",
            "releaseDate": "20220101",
            "description": 'Product description',
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/leaf_rake.png"
        },
        {
            "productId": 2,
            "productName": "Product 2",
            "productCode": "CODE-0002",
            "releaseDate": "20220101",
            "description": 'Product description',
            "price": 178.799,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
        },
        {
            "productId": 3,
            "productName": "Product 3",
            "productCode": "CODE-0003",
            "releaseDate": "20220101",
            "description": 'Product description',
            "price": 2.869,
            "starRating": 4.2,
            "imageUrl": "assets/images/hammer.png"
        },
    ];

    public toogleImage(): void {
        this.showImage = !this.showImage;
    }

    public performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().includes(filterBy));
    }
}