import { Component, OnInit } from '@angular/core';
import { ProductsManagerService } from '../products-manager.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart = [];
  constructor(private _productsManagerService: ProductsManagerService) { }

  ngOnInit() {
    this.cart = this._productsManagerService.cart;
  }

  removeFromcart (index) {
    console.log(index);
    this.cart.splice(index, 1);
    this._productsManagerService.cart = this.cart;
    this._productsManagerService.cartUpdated.emit(this._productsManagerService.cart);
  }

}
