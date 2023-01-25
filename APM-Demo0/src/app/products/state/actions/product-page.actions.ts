import {createAction, props} from '@ngrx/store';

export const toggleProductCode = createAction(
  '[Product Page] Toggle Product Code'
);

export const setCurrentProduct = createAction(
  '[Product Page] Set Current Product',
  props<{ currentProductId: number }>()
);

export const clearCurrentProduct = createAction(
  '[Product Page] Clear Current Product'
);

export const initializeCurrentProduct = createAction(
  '[Product Page] Initialize Current Product'
);
