import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Category, IProduct } from '../products/product';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let veges:IProduct[]=[];
  beforeEach(async () => {
      TestBed.configureTestingModule({
          imports:[HttpClientTestingModule, ReactiveFormsModule,FormsModule],
          providers: [ CartService ] 
      });
      service=TestBed.get(CartService)
      injector = getTestBed();
      veges=[
          {
              "id":1,
              "name":"tomato",
              "category":Category.vegetable,
              "image":"../assets/veg1.jpeg",
           
              "qty":50,
              "price":200,
              "rating":3,
              },
              {
                "id":2,
                "name":"Lady finger",
                "category":Category.vegetable,
                "image":"../assets/veg2.jpeg",
             
                "qty":50,
                "price":200,
                "rating":3,
                
              }
      ];
      service.cart=veges;

      httpMock=injector.get(HttpTestingController);
  });

  it('should create', () => {
  expect(service).toBeTruthy();
  });
   


  it('should check addtoCart()', () => {
  let vegetable ={
    "id":1,
    "name":"Apple",
    "category":Category.vegetable,
    "image":"../assets/veg3.jpeg",
 
    "qty":50,
    "price":200,
    "rating":3,
    
              };
      
       
       veges=[...veges,vegetable];
       service.cart.push(vegetable);
       service.addToCart(vegetable);
       expect(service.cart.length).toEqual(4);
      });

  it('should check emptyCart()', () => {
      let vegetable ={
        "id":1,
        "name":"Apple",
        "category":Category.vegetable,
        "image":"../assets/veg3.jpeg",
     
        "qty":50,
        "price":200,
        "rating":3,
      }
              
               
      veges=[...veges,vegetable];
      service.cart.push(vegetable);
      service.emptyCart();
      expect(service.cart.length).toEqual(0);
      });
});