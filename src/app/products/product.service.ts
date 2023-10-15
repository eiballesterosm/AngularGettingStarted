import { Injectable } from "@angular/core";
import { IProduct } from "./IProduct";

@Injectable({
    providedIn : 'root'
})
export class ProductService {

    getProducts(): IProduct[] {
        return [
            {
                "productId": 1,
                "productName": "Garden Cart",
                "productCode": "CODE-0001",
                "releaseDate": "20220101",
                "description": 'Product description',
                "price": 32.99,
                "starRating": 1.2,
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
                "starRating": 3.2,
                "imageUrl": "assets/images/hammer.png"
            },
            {
                "productId": 4,
                "productName": "Product 4",
                "productCode": "CODE-0004",
                "releaseDate": "20220101",
                "description": 'Product description 4',
                "price": 2.869,
                "starRating": 3.7,
                "imageUrl": "assets/images/saw.png"
            },
        ];
    }
}