import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ProductService} from "../product.service";
import {ProductApiActions, ProductPageActions} from "./actions";
import {catchError, concatMap, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";

@Injectable()
export class ProductEffects {

  constructor(private actions$: Actions, private productService: ProductService) {
  }

  createProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductPageActions.createProduct),
      // concatMap, ha számít a sorrend
      concatMap((action) => this.productService.createProduct(action.product)
        .pipe(
          map((product) => ProductApiActions.createProductSuccess({product})),
          catchError(error => of(ProductApiActions.createProductFailure({error})))
        )
      ))
  });

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductPageActions.loadProducts),
      mergeMap(() => this.productService.getProducts().pipe(
        map((products) => ProductApiActions.loadProductsSuccess({products})),
        catchError(error => of(ProductApiActions.loadProductsFailure({error})))
      ))
    );
  });

  updateProduct$ = createEffect(() => {
    return this.actions$.pipe( // responds to any dispatched actions
      ofType(ProductPageActions.updateProduct), // filter to updateProd action
      concatMap(action => { // higher order mapping operator
        return this.productService.updateProduct(action.product)
          .pipe(
            map(product => {
              return ProductApiActions.updateProductSuccess({product})
            }),
            catchError(error => of(ProductApiActions.updateProductFailure({error})))
          );
      })
    );
  });

  deleteProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductPageActions.deleteProduct),
      concatMap(action => this.productService.deleteProduct(action.productId)
        .pipe(
          map(() => ProductApiActions.deleteProductSuccess({productId: action.productId})),
          catchError(error => of(ProductApiActions.deleteProductFailure({error})))
        ))
    );
  });

}
