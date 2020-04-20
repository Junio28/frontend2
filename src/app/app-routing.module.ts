import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormLoginComponent } from './componenets/user/form-login/form-login.component';
import { ListUserComponent} from './componenets/user/list-user/list-user.component';
import { CreateUserComponent } from './componenets/user/create-user/create-user.component';
import { ListClientComponent } from './componenets/client/list-client/list-client.component';
import { CreateClientComponent } from './componenets/client/create-client/create-client.component';
import { ListProductComponent } from './componenets/product/list-product/list-product.component';
import { CreateProductComponent } from './componenets/product/create-product/create-product.component';
import { ListTypeproductComponent} from './componenets/typeproduct/list-typeproduct/list-typeproduct.component';
import { CreateTypeproductComponent } from './componenets/typeproduct/create-typeproduct/create-typeproduct.component';
import { ListSaleComponent } from './componenets/sale/list-sale/list-sale.component';
import { CreateSaleComponent } from './componenets/sale/create-sale/create-sale.component';



const routes: Routes = [
  {
    path: '',
    redirectTo:'/',
    pathMatch: 'full'
  },{
    path: 'login',
    component: FormLoginComponent 
  },
  {
    path: 'usuario',
    component: ListUserComponent
  },
  {
    path: 'usuario/nuevo',
    component: CreateUserComponent
  },
  {
    path: 'cliente',
    component: ListClientComponent
  },
  {
    path: 'cliente/nuevo',
    component: CreateClientComponent
  },
  {
    path: 'producto',
    component: ListProductComponent
  },
  {
    path: 'producto/nuevo',
    component: CreateProductComponent
  },
  {
    path: 'tipo_producto',
    component: ListTypeproductComponent
  },
  {
    path: 'tipo_producto/nuevo',
    component: CreateTypeproductComponent
  },
  {
    path: 'venta',
    component: ListSaleComponent
  },
  {
    path: 'venta/nuevo',
    component: CreateSaleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
