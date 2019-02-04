import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable, ObservableInput } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { IProduct } from './product';

@Injectable()
export class ProductService {
   private _producturl='app/product.json';
   constructor(private _http: Http){}
   
   getproducts(): Observable<IProduct[]> {
      return this._http.get(this._producturl)
      .map((response: Response) : IProduct[]  =>{ 
      debugger;
      return response.json()})
      .catch(this.handleError)
      .do(data => {
        debugger;  
        console.log(JSON.stringify(data))});
   }
   private handleError(error: Response) { 
    console.error(error); 
    return Observable.throw(error.json().error()); 
 }
}