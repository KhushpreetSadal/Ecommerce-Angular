import { Component, SimpleChange } from '@angular/core';
import { AddProductService } from '../seller-services/add-product.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-search-res',
  templateUrl: './search-res.component.html',
  styleUrls: ['./search-res.component.css'],
})
export class SearchResComponent {
  constructor(
    private service: AddProductService,
    private http: HttpClient,
    private router: Router,
    private activate_roter: ActivatedRoute
  ) { }
  ngOnInit(): void {
    let names: any = this.activate_roter.snapshot.paramMap.get('qurrey');
    this.name(names)
  }
  
  response: any

  name(names:string) {
    if (names) {

      let data = names && this.service.send_res(names).subscribe((res) => {
        if (res) {
          this.response = res
        }
      })
    }
  }
  view_product(id:string){
    this.router.navigate([`view-product/${id}`])

  }
}




