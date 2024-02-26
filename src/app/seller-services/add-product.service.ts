
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { addproduct, address } from 'data-type';

@Injectable({
  providedIn: 'root',
})
export class AddProductService {
  constructor(private http: HttpClient, private router: Router) {}

  showcart = new EventEmitter<addproduct[] | []>();

  senddata(data: addproduct) {
    this.http
      .post('http://localhost:3000/addproduct', data)
      .subscribe((result) => {
        if (result) {
          this.router.navigate(['seller-home']);
          alert('Product Added');
        }
      });
  }
  productdata: any;
  updateproduct(id: string) {
    if (id) {
      this.productdata = id;
      this.router.navigate(['seller-editproduct']);
    }
  }

  send_res(data: string) {
    return this.http.get<addproduct>(
      `http://localhost:3000/addproduct?q=${data}`
    );
  }

  get_product(id: string) {
    return this.http.get<addproduct>(`http://localhost:3000/addproduct/${id}`);
  }


  remove_to_cart(data: any) {
    let id = data;
    let cart: any = [];
    let localcart = localStorage.getItem('cart_item');
if(localcart&&localcart.length){

    if (data) {
      cart = localcart && JSON.parse(localcart);
      cart = cart.filter((item: any) => item.id != id);
      if (cart.length) {
        localStorage.setItem('cart_item', JSON.stringify(cart));
        this.showcart.emit(cart);
      } else {
        localStorage.setItem('cart_item', JSON.stringify([]));
        this.showcart.emit(cart);
      }
    }
  }else{
    id = data
    this.http.delete(`http://localhost:3000/user-cart/${id}`).subscribe((res)=>{
      let name = localStorage.getItem("user")
      let username = name && JSON.parse(name)
      this.match_user(username[0].name).subscribe((response)=>{
        
        let data = response&& JSON.stringify(response)
        let list = data && JSON.parse(data)
        this.showcart.emit(list)
        
      })
    })
    
  }
  }
post_cart(data:addproduct){
 return this.http.post<addproduct>('http://localhost:3000/user-cart',data)
}
match_user(data:string){
  return this.http.get<addproduct>(`http://localhost:3000/user-cart?q=${data}`);
}
add_address(data:object){
  return this.http.post("http://localhost:3000/user-address",data)
}

getaddress(data:string){
  return this.http.get<address>(`http://localhost:3000/user-address?q=${data}`);
}

storeorder(data:any){
  return this.http.post(`http://localhost:3000/user-orders`,data)
}

getorders(data:any){
  return this.http.get(`http://localhost:3000/user-orders?q=${data}`);
}

}

