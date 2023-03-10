import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CartAddComponent } from './cart-add.component';

describe('CartAddComponent', () => {
  let component: CartAddComponent;
  let fixture: ComponentFixture<CartAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  /* --- test case for Button Disable --- */



  it('should check checkout button disabled', () => {

    fixture.detectChanges();

    let btn=fixture.debugElement.query(By.css('#btn')).nativeElement ;

    expect(btn.disabled).toBe(true );

   })
});
