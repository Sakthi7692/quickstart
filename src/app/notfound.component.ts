import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { IProduct } from './product';
import { Route, Router } from '@angular/router';
import { Http } from '@angular/http';

@Component ({
   selector: 'my-app',
   template: `<h1>Page Not Found</h1>
    <button class = "button" (click) = "onBack()">Back to Products</button>
   `,
   providers: [ProductService]
})
export   class   NotFound  {
    _router: Router;
    _http: Http;
    constructor(private rout: Router, private http: Http){
        this._router = rout;
        this._http = http;
    }
    
    onBack(): void{
        this._router.navigate(['./Product']);
    }

}