import { Component } from '@angular/core';
import { AddProductService } from '../seller-services/add-product.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  constructor(private service:AddProductService, private router:Router,private http:HttpClient){}
  ngOnInit(){
    this.getuser()
  }
  
  product:any = []
  totalprice:any = 0
  address=""
  getuser(){
    let user = localStorage.getItem("user")
    let username = user && JSON.parse(user)
    let name = username[0].email
    this.getproduct(name)
    this.getaddress(name)

  }

  getproduct(data:string){
    this.service.match_user(data).subscribe((res:any)=>{
      if(res){
          this.product=res
          
          this.product.forEach((element:any) => {
            const price = Number(element.price)
            this.totalprice = this.totalprice+price
            
          });
      }
    })
  }


  getaddress(data:string){
    this.service.getaddress(data).subscribe((res:any)=>{
      if(res){
        this.address = `${res[0].house},${res[0].city},${res[0].state},${res[0].pincode}`
      
      }
    })
  }

  storeorder(){
    let add:any={
      address:"",
      product:[]
    }
   add.address = this.address
   this.product.forEach((element:any) => {
    add.product.push(element)

    this.service.storeorder(add).subscribe((res)=>{
     if(res){
       this.router.navigate(['user-orderpage'])
       this.http.delete(`http://localhost:3000/user-cart/${element.id}`).subscribe((res)=>{
        this.service.showcart.emit()
       })
     }
    })

   });
  
  }

}
