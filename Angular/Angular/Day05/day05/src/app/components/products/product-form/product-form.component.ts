import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent {
  constructor(
    private productsServices: ProductsService,
    public router: Router
  ) {}
  product: { id: number; name: string; price: number; quantity: number } = {
    id: 1,
    name: '',
    price: 0,
    quantity: 0,
  };
  productOperation(e: any) {
    e.preventDefault();
    let id = this.productsServices.products.length + 1;
    let newProduct = { ...this.product, id };
    this.productsServices.addNewProduct(newProduct);
    // route on products Pages
    this.router.navigate(['/products']);
  }
}
