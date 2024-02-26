import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
	images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  products:any
  allproducts:any

  constructor(private http:HttpClient){}
  ngOnInit():void{
    this.dispaly()
    this.dispalyall()
  }
  dispaly(){
    this.http.get('http://localhost:3000/addproduct?_limit=3').subscribe((result)=>{
      this.products=result
    })
  }

  dispalyall(){
    this.http.get('http://localhost:3000/addproduct').subscribe((result)=>{
      this.allproducts=result
    })
  }

  getuser(){
    this.http.get('https://randomuser.me/api/').subscribe((res)=>{
      console.log(res)
    })
  }
}