import {Component, OnInit, OnDestroy, Input, Output, EventEmitter} from '@angular/core';

import {Observable, Subscription} from 'rxjs';

import { Product } from '../product';
import { ProductService } from '../product.service';
import {Store} from "@ngrx/store";
import {getCurrentProduct, getShowProductCode, State} from "../state";
import {ProductPageActions} from "../state/actions";
import {tap} from "rxjs/operators";

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Products';
  @Input() errorMessage: string;
  @Input() displayCode: boolean;
  @Input() products: Product[];
  @Input() selectedProduct: Product;
  @Output() displayCodeChanged: EventEmitter<void> = new EventEmitter<void>();
  @Output() initializeNewProduct: EventEmitter<void> = new EventEmitter<void>();
  @Output() productWasSelected: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  checkChanged(): void {
    this.displayCodeChanged.emit();
  }

  newProduct(): void {
    this.initializeNewProduct.emit();
  }

  productSelected(product: Product): void {
    this.productWasSelected.emit(product);
  }

}
