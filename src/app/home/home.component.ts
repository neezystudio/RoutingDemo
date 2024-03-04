import { Component, NgModule, OnInit } from '@angular/core';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
// @NgModule({
//   declarations: [
//     // List of components, directives, and pipes used in this module
//   ],
//   imports: [
//     // List of modules imported by this module
//   ],
//   providers: [
//     // List of services provided by this module
//   ]
// })
export class HomeComponent implements OnInit{
  constructor(private productService : ProductsService){}

  productList : any;

  ngOnInit(){
    this.getProduct()
  }

  getProduct(){
    this.productService.getProductList().subscribe(res =>{
      this.productList = res
      console.log(this.productList);
    })
  }
}
