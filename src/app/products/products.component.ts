import {Component, OnInit} from "@angular/core";
import {ProductService} from "../_services/product.service";
import {product} from "./products.model";

@Component({
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList: undefined | product[]



  constructor(private product: ProductService) {
  }

  ngOnInit(): void {
    this.product.productList().subscribe((result) => {
      if (result) {
     this.productList = result;
   }
    })
  }

}
