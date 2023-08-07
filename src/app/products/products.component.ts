import {Component, OnInit} from "@angular/core";
import {ProductService} from "../_services/product.service";
import {product} from "./products.model";
import {CartService} from "../_services/cart.service";

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
    this.cartService.addToCart({
      productId: item.id,
      quantity: 1,

    }).subscribe(response => {
    })
  }
}
