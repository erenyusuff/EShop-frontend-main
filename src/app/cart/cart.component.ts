import {Component, OnInit} from "@angular/core";
import {CartService} from "../_services/cart.service";
import {Cart, CartProducts} from "./cart.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart
  cartProducts: CartProducts

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.getCartProducts(1).subscribe((result) => {
      if (result) {
        this.cart = result;
        console.log(result)
      }
    })
  }
}

