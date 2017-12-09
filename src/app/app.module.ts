import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { ProductsManagerService } from './products-manager.service';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    InfiniteScrollModule,
    RouterModule.forRoot([
      {path: '', redirectTo: "/products", pathMatch: 'full'},
      {path:'products', component: ProductsComponent},
      {path:'cart', component: CartComponent}
    ])
  ],
  providers: [ProductsManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
