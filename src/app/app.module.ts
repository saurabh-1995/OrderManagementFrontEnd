import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ClientComponent } from './client/client.component';
import { OrderComponent } from './order/order.component';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
   component: ClientComponent
 },
 {
   path:'Order',
 component: OrderComponent,
 },
 
 ];

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ClientComponent,
    OrderComponent,
    ListComponent
  ],
  imports: [
    
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [ClientComponent,OrderComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }

