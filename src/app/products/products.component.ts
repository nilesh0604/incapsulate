import { Component, OnInit } from '@angular/core';
import { ProductsManagerService } from '../products-manager.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products=[];
  errorMsg:string;

  constructor(private _productsManagerService: ProductsManagerService) { }

  ngOnInit() {

    this._productsManagerService.getProducts()
      .subscribe(resProductsData => this.products = resProductsData,
        resProductsError => this.errorMsg = resProductsError);

  }

  addTocart (selectedProduct) {
    this._productsManagerService.cart.push(selectedProduct);
    this._productsManagerService.cartUpdated.emit(this._productsManagerService.cart);
    console.log(this._productsManagerService.cart);
  }

}
