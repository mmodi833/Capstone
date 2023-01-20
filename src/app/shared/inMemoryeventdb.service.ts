import { Injectable } from "@angular/core";
import { InMemoryDbService } from 'angular-in-memory-web-api';


import { Category, IProduct } from "src/app/products/product";


@Injectable({
    providedIn: 'root'
})

export class InMemoryEventDbService implements InMemoryDbService{
    createDb(){
     

        const products:IProduct[]=[{
            "id": 100,
            "name": "Apple",
            "price": 200,
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdhK00ZcRa6PHMLhIBiJX99VzRwvLBGO-vtMKQHeXx&s",
            "category": Category.fruits,
            "qty": 20,
            "rating": 4
        
          },{
            "id": 101,
            "name": "Carrot",
            "price": 100,
            "image": "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fycm90fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            "category": Category.vegetable,
            "qty": 10,
            "rating": 3.5
        
          },{
            "id": 102,
            "name": "Cabbage",
            "price": 300,
            "image": "data:image/jpeg;base64,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",
            "category": Category.vegetable,
            "qty": 10,
            "rating": 5
        
          },{
            "id": 103,
            "name":"Lady Finger",
            "price": 100,
            "image": "https://cdn.shopify.com/s/files/1/0492/2481/0652/products/Lady_Finger_720x.png?v=1609402730",
            "category": Category.vegetable,
            "qty": 30,
            "rating": 3
        
          },{
            "id": 104,
            "name": "orange",
            "price": 110,
            "image": "data:image/jpeg;base64,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",
            "category": Category.fruits,
            "qty": 10,
            "rating": 3.5
        
          },{
            "id": 105,
            "name": "Strawberry",
            "price": 200,
            "image": "https://images.unsplash.com/photo-1588165171080-c89acfa5ee83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyYXdiZXJyeXxlbnwwfHwwfHw%3D&w=1000&q=80",
           
            "category": Category.fruits,
            "qty": 19,
            "rating": 3.5
        
          },{
            "id": 106,
            "name": "Cherry",
            "price": 300,
            "image": "https://media.istockphoto.com/id/172315512/photo/sweet-cherries.jpg?s=612x612&w=0&k=20&c=qz6b92ZkcMTH5XtZUMI7CW7CQPkYFo1qAWoHX48VQk4=",
            "category": Category.fruits,
            "qty": 18,
            "rating": 5
        
          },{
            "id": 107,
            "name": "Banana",
            "price": 40,
            "image": "data:image/jpeg;base64,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",
            "category": Category.vegetable,
            "qty": 20,
            "rating": 4
        
          }]

      
        

      return {products};
    }

}