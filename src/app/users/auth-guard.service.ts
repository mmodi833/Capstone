import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./authservice";

@Injectable({
    providedIn:'root'
})
export class AuthGuard implements CanActivate ,CanActivateChild{
    constructor(private authService:AuthService,private router:Router){}
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.checkLoggedIn(state.url);
    }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      return this.checkLoggedIn(state.url);


}
 checkLoggedIn(url:string):boolean{
    if(this.authService.isLoggedIn()){
        return true;
    }
    this.authService.redirectToUrl=url;
    this.router.navigate(['/login']);
    return false;
 }





}