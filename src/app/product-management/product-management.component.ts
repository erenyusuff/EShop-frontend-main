import {Component, OnInit} from '@angular/core';
import {ProductManagementService} from "../_services/product-management.service";
import {product} from "../products/products.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {
  productForm = new FormGroup({
    productName : new FormControl(''),
    price : new FormControl(''),
    stock : new FormControl(''),
    description : new FormControl(''),
    img : new FormControl(''),
    category : new FormControl(''),
    id : new FormControl(''),
    createdAt : new FormControl(''),
    updatedAt : new FormControl(''),
  });
  Product: product | any

  constructor(private productManagementService: ProductManagementService) {
  }

  ngOnInit(): void {
    this.productManagementService.getProducts().subscribe((result) => {
      if (result) {
        this.Product = result
        console.log(result)
      }
    })
  }


  addProduct(): void {
    const {productName, price, stock, description, img, category, id, createdAt, updatedAt} = this.productForm.value;
    this.productManagementService.addProduct({
      productName,
      price,
      stock,
      description,
      img,
      category,
      id,
      createdAt,
      updatedAt
    }).subscribe()
  }
deleteProduct(id: any): void {
    this.productManagementService.deleteProducts(id).subscribe()
}

  protected readonly ProductManagementService = ProductManagementService;
  protected readonly ondblclick = ondblclick;
  protected readonly window = window;
}
