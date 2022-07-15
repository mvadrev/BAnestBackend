import { Injectable } from "@nestjs/common";
import {Product} from "./products.model"

@Injectable()
export class productsService {

    products:Product[] = [];

    insertProduct(title: string, description: string, price: number): string {
        const prodID = new Date().toString()
        const newProduct = new Product(prodID, title, description, price);
        this.products.push(newProduct);
        return prodID;
    }

}