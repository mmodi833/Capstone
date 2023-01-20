import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent  implements OnInit{
  title:string="payment gateway";
  ngOnInit(): void {
   
  }
  constructor(private router:Router,private cartService:CartService){}
  onSubmit(){
  
    alert('Payment Successful');
    this.cartService.emptyCart();
    this.router.navigate(['']);
  }

}
