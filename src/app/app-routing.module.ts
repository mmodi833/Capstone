import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartAddComponent } from './cart-add/cart-add.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaymentComponent } from './payment/payment.component';

import { ProductListComponent } from './products/product-list.component';
import { ShippingComponent } from './shipping/shipping.component';

import { AuthGuard } from './users/auth-guard.service';
import { LoginComponent } from './users/login.component';

const routes: Routes = [
  
    {
      path:'',
    component:HomeComponent
  }
  ,
    {
      path:'products',
    component:ProductListComponent,canActivateChild:[AuthGuard],
    loadChildren:()=>import('../app/product/product.module').then(m=>m.ProductModule),
  
    },
    {
      path:'payment',
      component:PaymentComponent,
      canActivate:[AuthGuard]

    },
 
    {
      path:'login',
      component:LoginComponent
    },
    {
      path:'contact-form',
      component:ContactFormComponent
    },
    
    {
      path:'payment',
      component:PaymentComponent,
    
    },

    {
      
        path:'about',
        component:AboutComponent
      
    },
    {
      path:'cart-add',
      component:CartAddComponent
    },
    {
      path:'shipping',
      component:ShippingComponent
    }
    ,
    {
      path:'**',
      component:PageNotFoundComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
