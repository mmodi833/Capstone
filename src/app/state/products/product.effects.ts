import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { mergeMap, map, catchError, of, concatMap } from "rxjs";
import { ProductService } from "src/app/shared/product.service";
import * as ProductActions from './product.actions'

@Injectable()
export class ProductEffects {

  constructor(private actions$: Actions, private productService: ProductService) { }

  loadProducts$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(ProductActions.loadProducts),
        mergeMap(() => this.productService.getProducts()
          .pipe(
            map(products => ProductActions.loadProductsSuccess({ products })),
            catchError(error => of(ProductActions.loadProductsFailure({ error })))
          )
        )
      );
  });

  updateProduct$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(ProductActions.updateProduct),
        concatMap(action =>
          this.productService.updateProduct(action.product)
            .pipe(
              map(product => ProductActions.updateProductSuccess({ product })),
              catchError(error => of(ProductActions.updateProductFailure({ error })))
            )
        )
      );
  });

  createProduct$ = createEffect(() => {
    console.log('create')
    return this.actions$
      .pipe(
        ofType(ProductActions.createProduct),
        concatMap(action =>
          this.productService.createProduct(action.product)
            .pipe(
              map(product => ProductActions.createProductSuccess({ product })),
              catchError(error => of(ProductActions.createProductFailure({ error })))
            )
        )
      );
  });

  deleteProduct$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(ProductActions.deleteProduct),
        mergeMap(action =>
          this.productService.deleteProduct(action.productId).pipe(
            map(() => ProductActions.deleteProductSuccess({ productId: action.productId })),
            catchError(error => of(ProductActions.deleteProductFailure({ error })))
          )
        )
      );
  });
}