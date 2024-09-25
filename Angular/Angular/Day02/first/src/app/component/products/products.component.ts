import { Component } from '@angular/core';
import { ProductItemComponent } from './product-item/product-item.component';
import { products } from '../../models/products';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: IProduct[];

  constructor() {
    this.products = products;
  }
  removeProduct(productId: any) {
    this.products = this.products.filter((product) => product.id != productId);
  }
  editProduct() {
    //  let productIndex = this.products.findIndex(
    //    (product) => product.id == productId
    //  );
    //  this.products[productIndex] = {
    //    ...this.products[productIndex],
    //    name: this.products[productIndex].name.toUpperCase(),
    //  };

    this.products[0] = { ...this.products[0], name: 'new Name For Testing' };
  }
}
