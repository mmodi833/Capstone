import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, NgForm } from '@angular/forms'
import { Router } from '@angular/router';



@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  cForm!:FormGroup;
  
  title:string='contact us';
  ngOnInit(): void {}
  constructor(private router:Router){}

  onSubmit(){
    alert('successfully submitted');
  
    this.router.navigate(['']);
  }
}