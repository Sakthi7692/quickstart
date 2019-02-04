import { Component, Pipe, PipeTransform } from '@angular/core';
import { ProductService } from './product.service';
import { IProduct } from './product';

@Pipe({
    name: 'BirthDate'
})

export class BirthDatePipe implements PipeTransform{
    transform(value: string, name: string) {
        return value + " - " + new Date(name).toDateString();
    }
}

@Component ({
   selector: 'my-app',
   templateUrl: './product.component.html',
   providers: [ProductService]
})
export   class   AppProduct  {
    cycle: string = './app/images/lifecycle.jpg';
    iproducts: IProduct[] = [];
    name: string = '2508';
    constructor(private _product: ProductService) {
    }
    ngOnInit() : void {
        this._product.getproducts()
        .subscribe(iproducts => this.iproducts = iproducts);
     }
  oninput(e: any): void{
    this.name= e.target.value;
  }
}