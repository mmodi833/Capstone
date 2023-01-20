import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './users/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ProductAddComponent } from './products/product-add.component';
// import { ProductListComponent } from './products/product-list.component';
import { EffectsModule } from '@ngrx/effects';
import {  HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {Store, StoreModule } from '@ngrx/store';
import { HomeComponent } from './home/home.component';

import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AboutComponent } from './about/about.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryEventDbService } from './shared/inMemoryeventdb.service';
import { CartAddComponent } from './cart-add/cart-add.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { PaymentComponent } from './payment/payment.component';
import { AuthGuard } from './users/auth-guard.service';
import { ShippingComponent } from './shipping/shipping.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MaterialExampleModule } from 'src/material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



// import { StarIconComponent } from './star-icon/star-icon.component';
// import { StarIconComponent } from './star-icon/star-icon.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    CarouselComponent,
    ContactFormComponent,
    AboutComponent,
    CartAddComponent,
    PaymentComponent,
    ShippingComponent,
    PageNotFoundComponent

    // ProductListComponent,
    // ProductAddComponent,
    // StarIconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    EffectsModule.forRoot([]),
    ReactiveFormsModule,
     HttpClientModule,
    RouterModule.forRoot([]),
    HttpClientTestingModule,
    StoreModule.forRoot({}),
    HttpClientInMemoryWebApiModule.forRoot( InMemoryEventDbService),
    NgbModule,
    SlickCarouselModule,
    NgbCarouselModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    StoreDevtoolsModule.instrument(),
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MaterialExampleModule,


    
  
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
