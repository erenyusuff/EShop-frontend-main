import {Component, OnInit} from "@angular/core";
import {ProductService} from "../_services/product.service";
import {product} from "../products/products.model";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private product: ProductService) {
  }

  ngOnInit(): void {
    this.product.productList().subscribe((result) => {
      if (result) {
      }
    })
  }

}
