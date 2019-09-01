import { Product } from '../../models/model.product';
import * as fromActions from '../actions/products.actions';

export interface ProductsListSate{
    products: Product[];
    loading: boolean;
    loaded: boolean;
}
export const initialState=  {
products : [
    {
        productId: 13001,
      name: 'Lenovo Y700',
      avaialble: true
    }
],
loading: false,
loaded: false
}

export function reducer(
    state: ProductsListSate= initialState,
    action :  fromActions.ProductsAction
){
   switch(action.type){
       case fromActions.LOAD_PRODUCTS:{
        return {
            ...state, loading: true
        }
       }
       case fromActions.LOAD_PRODUCTS_FAIL:{
        return {
            ...state, 
            loading: false,
            loaded: false
        }
       }
       case fromActions.LOAD_PRODUCTS_SUCCESS:{
        return {
            ...state, 
            loading: false,
            loaded: true,
            products: action.payload
        }
       }
      default : return state    
   }
}

export const getProductsListLoading= (state: ProductsListSate)=> state.loading;
export const getProductsListLoaded= (state: ProductsListSate)=> state.loaded;
export const getProductsList= (state: ProductsListSate)=> state.products;

