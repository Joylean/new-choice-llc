import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
},
{
  path: 'home',
  component: HomeComponent,
  data: {
    title: 'Home'
  }
},
{
  path: 'products',
  component: ProductsComponent,
  data: {
    title: 'Products'
  }
},
{
  path: 'about',
  component: AboutComponent,
  data: {
    title: 'About Us'
  }
},
{
  path: 'contact',
  component: ContactComponent,
  data: {
    title: 'Contact Us'
  }
},
{
  path: 'login',
  component: LoginComponent,
  data: {
    title: 'Log In'
  }
},
{
  path: 'register',
  component: RegisterComponent,
  data: {
    title: 'Sign Up'
  }
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
