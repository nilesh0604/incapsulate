import { Component, OnInit } from '@angular/core';
import { ProductsManagerService } from '../products-manager.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cart = [];
  cartCount: number = 0;
  constructor(private _productsManagerService: ProductsManagerService) {
    this._productsManagerService.cartUpdated.subscribe(cart => {
      console.log("header subscriber");
      this.cart = cart;
      this.cartCount = this.cart.length;
    })
  }

  ngOnInit() {

  }


}
