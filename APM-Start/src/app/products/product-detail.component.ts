import { IProduct } from './../../../../APM-Final/src/app/products/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

pageTitle = 'Product Detail';
product: IProduct;

  constructor() { }

  ngOnInit() {
  }

}
