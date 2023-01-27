import {Product} from "../../product";
import {createAction, props} from "@ngrx/store";

export const loadProductsSuccess = createAction(
  '[Product API] Load Success',
  props<{products: Product[]}>()
);

export const loadProductsFailure = createAction(
  '[Product API] Load Fail',
  props<{error: string}>()
);
