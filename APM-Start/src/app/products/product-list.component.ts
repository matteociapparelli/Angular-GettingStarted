import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;

  showImage = false;

  _listFilter = 'cart';
  errorMessage: string;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
     this._listFilter = value;
     this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[];

  products: IProduct[] = [];

constructor(private productService: ProductService) {
  this._listFilter = '';
  this.errorMessage = '';

}

  ngOnInit() {
     this.productService.getProducts()
    .subscribe(
      products => {this.products = products;
      this.filteredProducts = this.products;
    }, error => this.errorMessage = <any>error);
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: number): void {
    this.pageTitle = 'Product List ' + message;
  }

}
