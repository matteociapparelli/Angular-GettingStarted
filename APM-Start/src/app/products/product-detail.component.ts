import { IProduct } from './product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

pageTitle = 'Product Detail';
product: IProduct;
errorMessage: '';

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {

  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle = `${this.pageTitle} - ${id}`;
    
    this.productService.getProducts()
    .subscribe(
      products => {
        this.product = products.filter((product: IProduct) => product.productId === id)[0];
      }, error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
