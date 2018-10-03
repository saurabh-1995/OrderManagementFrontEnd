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
import { MatDialogModule } from '@angular/material/dialog';

import { ModalService } from 'src/app/modal.service';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatButtonModule, MatCheckboxModule} from '@angular/material';

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
 },
 {
   path:'List',
   component:ListComponent
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
    FormsModule,
    HttpModule,
    HttpClientModule,
    MatDialogModule,
    // BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    // [MatButtonModule, MatCheckboxModule],
    RouterModule.forRoot(routes)
    
  ],
  providers: [ClientService,ItemService,ModalService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})

export class AppModule { }

