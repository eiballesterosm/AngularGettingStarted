import { Component } from "@angular/core";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {

    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 4;
    showImage: boolean = false;
    listFilter: string = 'cart';

    products: any[] = [
        {
            "productId": 1,
            "productName": "Garden Cart",
            "productCode": "CODE 0001",
            "releaseDate": "20220101",
            "description": 'Product description',
            "price": 32.99,
            "startingRating": 4.2,
            "imageUrl": "assets/images/leaf_rake.png"
        },
        {
            "productId": 2,
            "productName": "Product 2",
            "productCode": "CODE 0002",
            "releaseDate": "20220101",
            "description": 'Product description',
            "price": 178.799,
            "startingRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
        },
        {
            "productId": 3,
            "productName": "Product 3",
            "productCode": "CODE 0003",
            "releaseDate": "20220101",
            "description": 'Product description',
            "price": 2.869,
            "startingRating": 4.2,
            "imageUrl": "assets/images/hammer.png"
        },
    ];

    public toogleImage(): void {
        this.showImage = !this.showImage;
    }

}