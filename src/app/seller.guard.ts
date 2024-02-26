import { CanActivateFn } from '@angular/router';
export const sellerGuard: CanActivateFn = (route, state,) => {
let issellerloggedin = localStorage.getItem('seller')
if(issellerloggedin){
  return true;

}
else{
  return false
}
};
