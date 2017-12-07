import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }  from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProductsManagerService {
  cartUpdated: EventEmitter<any> = new EventEmitter();
  cart = [];
  constructor(private _http: Http) { }

  getProducts(){
    return this._http.get('assets/data/products.json')
      .map((response: Response) => response.json())
      .catch(this._errorHandler);
  }

  _errorHandler(error: Response){
    console.error(error);
    return Observable.throw(error || "Server Error");
  }

}
