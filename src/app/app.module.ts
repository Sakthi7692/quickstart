import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppProduct } from './product.component';
import { Inventory } from './inventory.component';
import { NotFound } from './notfound.component';
import { FormsModule } from '@angular/forms';
import { ProductFormComponent } from './product-form.component';
import { BirthDatePipe } from "./product.component"

const approutes: Routes = [
  { path: 'Product', component: AppProduct },
  { path: 'Inventory', component: Inventory },
  { path: '**', component: NotFound }
]

@NgModule({
  imports:      [ BrowserModule, HttpModule, RouterModule.forRoot(approutes), FormsModule ],
  declarations: [ AppComponent, AppProduct, Inventory, NotFound, ProductFormComponent, BirthDatePipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
