// Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

//App services
import { QueryService } from './query.service';
import { SharedataService } from './sharedata.service';

//App components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './product/product.component';
import { UserFormComponent } from './user-form/user-form.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { FilterPipe } from './filter.pipe';

//App routing
const appRoutes: Routes = [
  { path: '',component:ProductsListComponent },
  { path:'product',component:ProductComponent },
  { path:'submit',component:UserFormComponent },
  { path:'cart',component:CartViewComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsListComponent,
    ProductComponent,
    UserFormComponent,
    CartViewComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [QueryService,SharedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
