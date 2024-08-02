import { Injectable } from '@angular/core';
import { IProduct } from '../models/i-product';
import { productsList } from '../models/productsList';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: IProduct[] = productsList;
  constructor() {}

  getAllProducts(): IProduct[] {
    return this.products;
  }

  getProductById(productId: any): IProduct | undefined {
    return this.products.find((product) => product.id == productId);
  }

  addNewProduct(product: any) {
    this.products.push(product);
    return this.products;
  }

  deleteProduct(productId: any) {
    this.products = this.products.filter((product) => product.id != productId);
    return this.products;
  }
}
