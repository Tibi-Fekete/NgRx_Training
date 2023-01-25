import {AppState} from '../../state/app.state';
import {ProductState} from './product.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Product} from '../product';

export interface State extends AppState {
  products: ProductState;
}

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
  getProductFeatureState,
  state => state.showProductCode
);

export const getCurrentProductId = createSelector(
  getProductFeatureState,
  state => state.currentProductId
);

export const getCurrentProduct = createSelector(
  getProductFeatureState, // composing selectors
  getCurrentProductId,
  (state, currentProductId) => {
    if (currentProductId === 0) {
      return {
        id: 0,
        productCode: 'New',
        productName: '',
        description: '',
        starRating: 0
      } as Product;
    } else {
      return currentProductId ? state.products.find(p => p.id === currentProductId) : null;
    }
  }
);
