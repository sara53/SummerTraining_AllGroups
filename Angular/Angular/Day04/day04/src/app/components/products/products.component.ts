import { Component } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { Iproduct } from '../../model/iproduct';
import { productsList } from '../../model/productList';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductDetailsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: Iproduct[] = productsList;
}
