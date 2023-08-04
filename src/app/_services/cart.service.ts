import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {
  }



  addToCart(cartId: number, payload: any) {
    return this.http.put(environment.api + '/cart/' + cartId + '/addToCart', payload);
  }
}
