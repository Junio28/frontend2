import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componenets/layouts/main/header/menu/menu.component';
import { FormLoginComponent } from './componenets/user/form-login/form-login.component';
import { ListUserComponent } from './componenets/user/list-user/list-user.component';
import { CreateUserComponent } from './componenets/user/create-user/create-user.component';
import { ListClientComponent } from './componenets/client/list-client/list-client.component';
import { CreateClientComponent } from './componenets/client/create-client/create-client.component';
import { ListProductComponent } from './componenets/product/list-product/list-product.component';
import { CreateProductComponent } from './componenets/product/create-product/create-product.component';
import { ListTypeproductComponent } from './componenets/typeproduct/list-typeproduct/list-typeproduct.component';
import { CreateTypeproductComponent } from './componenets/typeproduct/create-typeproduct/create-typeproduct.component';
import { CreateSaleComponent } from './componenets/sale/create-sale/create-sale.component';
import { ListSaleComponent } from './componenets/sale/list-sale/list-sale.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FormLoginComponent,
    ListUserComponent,
    CreateUserComponent,
    ListClientComponent,
    CreateClientComponent,
    ListProductComponent,
    CreateProductComponent,
    ListTypeproductComponent,
    CreateTypeproductComponent,
    CreateSaleComponent,
    ListSaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
