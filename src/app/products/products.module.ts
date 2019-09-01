import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import {StoreModule} from  '@ngrx/store'
import { reducers } from './store';
import { ProductListComponent } from './components/product-list/product-list.component';



@NgModule({
  declarations: [ProductsComponent, ProductListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('products', reducers)
  ]
})
export class ProductsModule { }
