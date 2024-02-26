import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AddProductService } from '../seller-services/add-product.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {
  products:any
  constructor(private http : HttpClient ,private router:Router,private service:AddProductService){}
  ngOnInit():void{
    this.productlist()
  }
  productlist(){
    let response = this.http.get("http://localhost:3000/addproduct").subscribe((res)=>{
      this.products=res
    })
  }
  remove(id:string){
    this.http.delete(`http://localhost:3000/addproduct/${id}`).subscribe((res)=>{
      if(res){
        this.productlist()
   
      }
    })
  }

  update(id:string){
    if(id){
    this.service.updateproduct(id)
    }
  }
}
  
