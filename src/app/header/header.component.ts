import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddProductService } from '../seller-services/add-product.service';
import { RouterTestingHarness } from '@angular/router/testing';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  headerstyle: string = 'defaultstyle';
  username: string = '';
  sellername: string = '';
  show_search = true
  cartdata:number=0
  constructor(private router: Router, private http: HttpClient, private service: AddProductService) { }

  ngOnInit(): void {
    this.router.events.subscribe((value: any) => {
      if (value.url) {
        if (localStorage.getItem('seller') && value.url.includes('seller')) {
          this.headerstyle = 'sellerstyle';
          this.show_search = false
          if (localStorage.getItem('seller')) {
            let sellername = localStorage.getItem('seller');
            let sellerdata = sellername && JSON.parse(sellername);
            this.sellername = sellerdata[0].name;
          }
        }else if(localStorage.getItem('user')){
          this.headerstyle = 'userstyle';
          this.show_search = true
           let username = localStorage.getItem('user')
          let userdata = username && JSON.parse(username)
 
      
            this.username = userdata.name
            this.username = userdata[0].name;
        }
        else {
          this.headerstyle = 'defaultstyle';
          this.show_search = true
        }
      }
    });
  this.updatecart()
  
  }
  updatecart(){
    let user = localStorage.getItem('user')
    let userid = user&& JSON.parse(user)

    
    let list = localStorage.getItem('cart_item')
    let listno = list && JSON.parse(list).length
    if(listno){
   this.cartdata = listno
   
    }else if(userid){
      this.service.match_user(userid[0].email).subscribe((results)=>{
        let res = JSON.stringify(results)
        let cartdata = JSON.parse(res)
        this.cartdata = cartdata.length
      })
    }
    this.service.showcart.subscribe((res)=>{
      this.cartdata = res&&res.length
    })

  }
  logout_seller() {
    let sellerdata = localStorage.removeItem('seller');
    this.router.navigate(['/']);
  }
  logout_user(){
    let userdata = localStorage.removeItem('user')
    this.cartdata = 0
    this.router.navigate(['/'])
    this.service.showcart.emit()
  }

  display: any;
  show = true;
  search(data: string) {
    if (data == '') {
      this.show = false;
    } else {
      let value = this.http.get(`http://localhost:3000/addproduct?q=${data}`)
        .subscribe((result) => {
          this.display = result;
          this.show = true;
        });
    }
  }


  name: string = ""
  fill_form(data: string) {
    if (data) {
      this.name = data
    }
  }

  show_res(data: string) {
    this.service.send_res(data)
    this.router.navigate([`search-result/${data}`])
    setTimeout(() => {
      window.location.reload()
    }, 5);
  }
}
