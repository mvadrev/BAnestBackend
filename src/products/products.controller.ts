import { Controller, Post, Body } from "@nestjs/common";
import { productsService } from "./products.service";


@Controller('products')
export class productsController {

    constructor(private readonly productsService: productsService) {

    }

    @Post()
    addProduct(@Body('title') prodTitle: string, @Body('description') prodDesc, @Body('price') prodPrice) {
        const generatedID = this.productsService.insertProduct(prodTitle, prodDesc, prodPrice);
        return {id: generatedID}
    }


}