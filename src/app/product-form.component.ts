import { Component } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { Http } from '@angular/http';
import { debug } from 'util';

@Component ({
   selector: 'product-form',
   templateUrl: './product-form.component.html',
   providers: [ProductService]
})

export class ProductFormComponent {
    constructor(private _http: Http, private ser: ProductService) {}
   model: IProduct = new IProduct(1,'ProductA');
   ngOnInit() : void {
    this.ser.getproducts().subscribe(e=>
        this.model = new IProduct(e[0].productid, e[0].productname)
);
   }
}