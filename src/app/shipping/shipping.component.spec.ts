import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ShippingComponent } from './shipping.component';

describe('ShippingComponent', () => {
  let component: ShippingComponent;
  let fixture: ComponentFixture<ShippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check Address', () => {

    const e1 =fixture.debugElement.query(By.css('#addrs_1'));
  
    expect(e1).toBeTruthy();
  
  });
  
  it('should have Address type of text', () => {
  
    const e1 =fixture.debugElement.query(By.css('#addrs_2'));
  
    expect(e1.nativeElement.getAttribute('type')).toEqual('text');
  
  });
  
  it('should have Address type as adr', () => {
  
    const e1 =fixture.debugElement.query(By.css('#addrs_1'));
  
    expect(e1.nativeElement.getAttribute('name')).toEqual('addrs_1');
  
  });
  
});
