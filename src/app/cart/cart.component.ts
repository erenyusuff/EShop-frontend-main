import {Component, OnInit} from "@angular/core";
import {CartService} from "../_services/cart.service";
import {Cart, CartProducts, product} from "./cart.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart
  cartProducts: CartProducts
  product: product

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.getCartProducts().subscribe((result) => {
      if (result) {
        this.cart = result;
        console.log(result)
      }
    })
  }

  buyCart() {
    this.cartService.buyCart(this.cart.id).subscribe((result) => {
      if (result) {
        console.log(result)
      }
    })
  }
}

