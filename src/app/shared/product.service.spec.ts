import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, inject, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { Category, IProduct } from '../products/product';
import { ProductService } from './product.service';


describe('Product Service', () => {
    let service: ProductService;
    let injector: TestBed;
    let httpMock: HttpTestingController;
    let veges:IProduct[]=[];
    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule, ReactiveFormsModule, FormsModule],
            providers: [ ProductService ]
        });
        service=TestBed.get(ProductService)
        injector = getTestBed();

        veges=[
            {
                "id":2,
                "name":"apple",
                "category":Category.vegetable,
                "image":"../assets/veg3.jpeg",
             
                "qty":50,
                "price":300,
                "rating":4,
                
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

        httpMock=injector.get(HttpTestingController);
    });

    it('should create', () => {
    expect(service).toBeTruthy();
    });

    it('should check getVegesById()',()=>{
        let veges:IProduct;
        let vegetable={
              
            "id":1,
            "name":"tomato",
            "category":Category.vegetable,
            "image":"../assets/veg1.jpeg",
         
            "qty":50,
            "price":200,
            "rating":3,

        };
        const test=spyOn(service,'getProductById').and.returnValue(of(vegetable));
        service.getProductById(1).subscribe(response=>{
            veges=response;
            expect(veges).toEqual(vegetable);

        });
        expect(test).toHaveBeenCalled();
    });  

    it('should check createVeg()',()=>{
        let vegetable1={
            "id":2,
            "name":"Apple",
            "category":Category.vegetable,
            "image":"../assets/veg3.jpeg",
         
            "qty":50,
            "price":200,
            "rating":3,
            
        };
        let vegetable2={
            "id":2,
            "name":"Lady finger",
            "category":Category.vegetable,
            "image":"../assets/veg2.jpeg",
         
            "qty":50,
            "price":200,
            "rating":3,
            
        };
        veges=[...veges,vegetable1];
        service.createProduct(vegetable1).subscribe(
            response=>expect(response).toEqual(vegetable1)
        )
        expect(veges.length).toEqual(3);
        const req=httpMock.expectOne(service.url);
        expect(req.request.method).toBe('POST');
        req.flush(vegetable1);

    });

    it('should check updateVeg()',()=>{
        let vegetable2={
            "id":2,
            "name":"Lady finger",
            "category":Category.vegetable,
            "image":"../assets/veg2.jpeg",
         
            "qty":50,
            "price":200,
            "rating":3,
            
    };
    service.updateProduct(vegetable2).subscribe(
        response=>expect(response).toEqual(vegetable2)
    )
    const req=httpMock.expectOne(`${service.url}/${vegetable2.id}`);
    expect(req.request.method).toBe('PUT');
    req.flush({vegetable2});
    });

    it('should check deleteVeg()',()=>{
        let vegetable1={
            "id":2,
            "name":"Lady finger",
            "category":Category.vegetable,
            "image":"../assets/veg2.jpeg",
         
            "qty":50,
            "price":200,
            "rating":3,
            
        };
        let vegetable2={
            "id":4,
            "name":"Apple",
            "category":Category.vegetable,
            "image":"../assets/veg3.jpeg",
         
            "qty":50,
            "price":200,
            "rating":3,
        }
    veges=[...veges,vegetable1,vegetable2];
    service.deleteProduct(vegetable2.id).subscribe(
        reponse=>console.log(reponse)
    );
    expect(veges.length).toEqual(4);
    const req=httpMock.expectOne(`${service.url}/${vegetable2.id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(vegetable2);
    });
});