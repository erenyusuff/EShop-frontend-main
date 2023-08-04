import {Component, OnInit} from "@angular/core";
import {ProductService} from "../_services/product.service";
import {product} from "./products.model";
import {CartService} from "../_services/cart.service";
import {Cart} from "../cart/cart.model";

@Component({
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList: undefined | product[]


  constructor(
    private productService: ProductService,
    private cartService: CartService,
  ) {
  }

  ngOnInit(): void {
    this.productService.productList().subscribe((result) => {
      if (result) {
        this.productList = result;
      }
    })
  }

  addToCart(item: product) {

    console.log('added item', item)
    this.cartService.addToCart(6,{
      productId: item.id,
      quantity: 1,
      cartId: 9
    }).subscribe(response=>{
      console.log('response', response);
    })
  }
}
