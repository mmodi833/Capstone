import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products/product';
import { InMemoryEventDbService } from '../shared/inMemoryeventdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 title:string="homepg"


    }
