import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SellerSignupComponent } from './seller-signup/seller-signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerAddproductComponent } from './seller-addproduct/seller-addproduct.component';
import { SellerEditproductComponent } from './seller-editproduct/seller-editproduct.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchResComponent } from './search-res/search-res.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { CartComponent } from './cart/cart.component';
import { PaymethodComponent } from './paymethod/paymethod.component';
import { OrderComponent } from './order/order.component';
import { OrderpageComponent } from './orderpage/orderpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerSignupComponent,
    SellerHomeComponent,
    SellerAddproductComponent,
    SellerEditproductComponent,
    SearchResComponent,
    ViewProductComponent,
    UserAuthComponent,
    CartComponent,
    PaymethodComponent,
    OrderComponent,
    OrderpageComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
