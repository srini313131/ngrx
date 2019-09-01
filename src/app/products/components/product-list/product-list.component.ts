import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../../store'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private store : Store<fromStore.ProductsState>) { }

  ngOnInit() {
this.store.select('products').subscribe(state=> console.log(state))
  }

}
