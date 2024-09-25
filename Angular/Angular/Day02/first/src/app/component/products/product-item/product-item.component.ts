import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IProduct } from '../../../models/iproduct';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent implements OnInit, OnDestroy, OnChanges {
  @Input() product?: IProduct;
  previousBookName: any;

  @Output() removeProductHandler = new EventEmitter();

  constructor() {
    console.log('1-ctor');
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.previousBookName = changes['product'].previousValue?.name;
  }
  ngOnDestroy(): void {
    console.log('Product Removed -- log from on destroy');
  }
  ngOnInit(): void {
    console.log('3-OnInit');
  }

  removeProduct(productId: any) {
    this.removeProductHandler.emit(productId);
  }
}
