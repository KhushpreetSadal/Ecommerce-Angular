import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddProductService } from '../seller-services/add-product.service';
import { HttpClient } from '@angular/common/http';
import { addproduct } from 'data-type';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-seller-editproduct',
  templateUrl: './seller-editproduct.component.html',
  styleUrls: ['./seller-editproduct.component.css']
})
export class SellerEditproductComponent {
  listing:any=[{
    name:"",
    price:"",
    category:"",
    iamge:"",
    color:"",
    description:""
}]
  constructor(private router:Router,private service : AddProductService,private http:HttpClient ){}
  ngOnInit():void{
    if(this.service.productdata == "" || this.service.productdata == undefined){
      this.router.navigate(['seller-home'])
    }
    this.list()
  }

  update(data:addproduct){
   return this.http.patch(`http://localhost:3000/addproduct/${this.service.productdata}`,data).subscribe((res)=>{
      if(res){
        this.router.navigate(['seller-home'])
      }
    })
  }

  list(){
    let response = this.http.get(`http://localhost:3000/addproduct?id=${this.service.productdata}`).subscribe((res)=>{
   
    if(res){
      this.listing=res
    }
    })
  }

}
