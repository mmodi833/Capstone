import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../users/authservice';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {



 

get isLoggedIn():boolean{
const a = localStorage.getItem('isLoggedIn');
console.log('local',a)
if(a === 'yes')
  return true//this.authservice.isLoggedIn();
  return false;
}


get username():string{

  console.log(this.authservice.currentUser?.username);

if(this.authservice.currentUser)
return this.authservice.currentUser?.username;

return '';

}
constructor(private router:Router,private authservice:AuthService){}


  ngOnInit(): void {
  }

  logOut():void{
    this.authservice.logOut();
    localStorage.setItem('isLoggedIn','no')
    this.router.navigate(['/']);
  }

}
