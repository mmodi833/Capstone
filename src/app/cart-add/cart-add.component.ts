import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from '../products/product';
import { CartService } from '../shared/cart.service';


@Component({
  selector: 'app-cart-add',
  templateUrl: './cart-add.component.html',
  styleUrls: ['./cart-add.component.css']
})
export class CartAddComponent implements OnInit {

 //initialisation
 prods:IProduct[]=[];
 amt!:number;
 title:string='cart';
 isdisabled=false;
 constructor(private cartService:CartService,private router:Router){}
 
 ngOnChanges(changes: SimpleChanges): void {}
 
 ngOnInit(): void {
   this.cartService.getProds().subscribe(res=>{
     this.prods=res;
     this.amt=this.cartService.getTotalPrice();
   });
 }
 
 emptycart(){
   this.cartService.emptyCart();
 }

 removeProd(p:IProduct){
   this.cartService.removeCartItem(p);
 }

 checkout(){
   this.router.navigate(['shipping']);
 }
 check(isdisabled:any){
  if(this.amt==0){
   return isdisabled=true;
  }
  return isdisabled;
 }
}