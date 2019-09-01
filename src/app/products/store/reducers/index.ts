import * as fromProductsList from './products.reducer'
import {ActionReducerMap, createFeatureSelector,createSelector}  from '@ngrx/store'

export interface ProductsState{
   productsList: fromProductsList.ProductsListSate
}

export const reducers : ActionReducerMap<ProductsState>= {
  productsList: fromProductsList.reducer
}

export const  getProductsState=createFeatureSelector<ProductsState>('products')

export const getProductsListState= createSelector(getProductsState, (state:ProductsState)=> state.productsList)

 