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
    return this.http.put(environment.api + '/cart/current/addToCart', payload);
  }

  getCartProducts(userId: number) {
    return this.http.get<Cart>(environment.api + '/cart/'+userId+'/mycart');
  }
}
