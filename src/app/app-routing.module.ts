import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerSignupComponent } from './seller-signup/seller-signup.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { sellerGuard } from './seller.guard';
import { SellerAddproductComponent } from './seller-addproduct/seller-addproduct.component';
import { SellerEditproductComponent } from './seller-editproduct/seller-editproduct.component';
import { SearchResComponent } from './search-res/search-res.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { CartComponent } from './cart/cart.component';
import { PaymethodComponent } from './paymethod/paymethod.component';
import { OrderComponent } from './order/order.component';
import { OrderpageComponent } from './orderpage/orderpage.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'seller-signup',
    component: SellerSignupComponent,
  },
  {
    path: 'seller-home',
    component: SellerHomeComponent,
    canActivate: [sellerGuard],
  },
  {
    path: 'seller-addproduct',
    component: SellerAddproductComponent,
    canActivate: [sellerGuard],
  },
  {
    path: 'seller-editproduct',
    component: SellerEditproductComponent,
    canActivate: [sellerGuard],
  },
  {
    path: 'search-result/:qurrey',
    component: SearchResComponent,
  },
  {
    path: 'view-product/:id',
    component: ViewProductComponent,
  },
  {
    path: 'user-auth',
    component: UserAuthComponent,
  },
  {
    path: 'user-cart',
    component: CartComponent,
  },
  {
    path: 'user-pay',
    component: PaymethodComponent,
  },
  {
    path:'user-order',
    component:OrderComponent
  },
  {
    path:'user-orderpage',
    component:OrderpageComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
