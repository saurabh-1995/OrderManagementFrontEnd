import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ClientComponent } from './client/client.component';
import { OrderComponent } from './order/order.component';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { ClientService} from 'src/app/client.service';
import { ItemService} from 'src/app/item.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '../../node_modules/@angular/common/http';


const routes: Routes = [{
  path: '',
   component: ItemComponent
 },
 {
  path:'Client',
  component:ClientComponent,
},
 {
   path:'Order',
 component: OrderComponent,
 }
 
 
 ];

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ClientComponent,
    OrderComponent,
    ListComponent,
    
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [ClientService,ItemService],
  bootstrap: [AppComponent]
})

export class AppModule { }

