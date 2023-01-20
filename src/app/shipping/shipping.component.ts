import { Component, OnInit} from '@angular/core';
declare var AddressFinder: any;

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit  {
 
  // constructor(private cartService:CartService){}
  // shippingCosts!: Observable<{ type: string, price: number }[]>;
  // ngOnInit(): void {
  //   this.shippingCosts =  this.cartService.getShippingPrices();
  ngOnInit() {
    let script = document.createElement("script");
    script.src = "https://api.addressfinder.io/assets/v3/widget.js";
    script.async = true;
    script.onload = this.initAf;
    document.body.appendChild(script);
  }

  initAf() {
    let widget = new AddressFinder.Widget(
      document.getElementById("addrs_1"),
      "ADDRESSFINDER_DEMO_KEY",
      "AU",
      {}
    );

    widget.on("result:select", function(fullAddress: any, metaData: { address_line_1: any; address_line_2: any; locality_name: any; state_territory: any; postcode: any; }) {

    });
  }
}
  