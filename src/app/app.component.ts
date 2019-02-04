import { Component } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

import 'rxjs/add/operator/catch';

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
  providers: [ProductService]
})
export class AppComponent  { 



 
}
