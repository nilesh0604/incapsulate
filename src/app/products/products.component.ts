import { Component, OnInit } from '@angular/core';
import { ProductsManagerService } from '../products-manager.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  showProducts=[];
  allProducts = []
  errorMsg:string;
  lastProductIndex;

  constructor(private _productsManagerService: ProductsManagerService) { }

  ngOnInit() {

    this._productsManagerService.getProducts()
      .subscribe(resProductsData => this.allProducts = resProductsData,
        resProductsError => this.errorMsg = resProductsError,
        () => {this.showProducts = this.allProducts.slice(0, 8); this.lastProductIndex = 8})

  }

  addTocart (selectedProduct) {
    this._productsManagerService.cart.push(selectedProduct);
    this._productsManagerService.cartUpdated.emit(this._productsManagerService.cart);
    console.log(this._productsManagerService.cart);
  }

  onScroll () {
    let firstProductIndex = this.lastProductIndex+1;
    this.lastProductIndex += 8;
    let nextProducts = this.allProducts.slice(firstProductIndex, this.lastProductIndex);
    this.showProducts = [...this.showProducts, ...nextProducts];
  }

}
