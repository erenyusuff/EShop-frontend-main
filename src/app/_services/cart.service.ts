import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {Cart} from "../cart/cart.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {
  }


  addToCart(payload: any) {
    return this.http.put(environment.api + '/cart/addToCart', payload);
  }

  getCartProducts(item: Cart) {
    return this.http.get<Cart>(environment.api + '/cart/5');
  }
}
