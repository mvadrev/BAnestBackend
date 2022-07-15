import { Module } from "@nestjs/common";
import { productsController } from "./products.controller";
import { productsService } from "./products.service";

@Module({
    controllers: [productsController],
    providers: [productsService]
})
export class productsModule {

}