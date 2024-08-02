import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/i-product';
import { productsList } from '../models/productsList';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: any;

  constructor(public productsServices: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsServices.getAllProducts();
  }
  deleteHandler(productId: any) {
    this.products = this.productsServices.deleteProduct(productId);
  }
}
