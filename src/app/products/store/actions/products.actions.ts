import {Action} from '@ngrx/store';
import {Product} from '../../models/model.product'


export const LOAD_PRODUCTS= '[Products] Load Pizzas';
export const LOAD_PRODUCTS_FAIL= '[Products] Load Pizzas Fail';
export const LOAD_PRODUCTS_SUCCESS= '[Products] Load Pizzas Success';

export class LoadProducts implements Action {
    readonly type= LOAD_PRODUCTS;
}

export class LoadProductsFail implements Action {
    readonly type= LOAD_PRODUCTS_FAIL;
    constructor (public payload: any){}
}

export class LoadProductsSuccess implements Action {
    readonly type= LOAD_PRODUCTS_SUCCESS;
    constructor (public payload: Product[]){}
}

export type ProductsAction= LoadProducts | LoadProductsFail | LoadProductsSuccess;