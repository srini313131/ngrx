import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../../store'
import {Product} from '../../models/model.product';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>

  constructor(private store : Store<fromStore.ProductsState>) { }

  ngOnInit() {
this.products$=this.store.select(fromStore.getProducts)
  }

}
