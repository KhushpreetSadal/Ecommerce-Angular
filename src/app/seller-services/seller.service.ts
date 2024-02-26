import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { login, signup } from 'data-type';

@Injectable({
  providedIn: 'root',
})
export class SellerService {

  constructor(private http: HttpClient, private router: Router) {}

  senddata(data: signup) {
    this.http.post('http://localhost:3000/seller', data,{observe:'response'}).subscribe((result) => {
      if (result.body) {
        this.router.navigate(['seller-home']);
        let sellerdata = JSON.stringify(result.body)
        localStorage.setItem('seller',sellerdata)
      }  
    });
}

matchdata(data:login){

this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,{observe:'response'}).subscribe((result:any)=>{

  if(result && result.body && result.body.length){
    this.router.navigate(['seller-home']);
    let sellerdata = JSON.stringify(result.body)
    localStorage.setItem('seller',sellerdata)
  }
  else{

    alert('no match found')
  }
})
}
}
