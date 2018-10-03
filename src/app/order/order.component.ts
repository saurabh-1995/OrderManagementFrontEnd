import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/client.service';
import { ItemService } from 'src/app/item.service';
import { ClientModel } from 'src/app/client-model';
import { ItemModel } from 'src/app/item-model';
import { OrderModel } from 'src/app/order-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';
import {Serialize, SerializeProperty, Serializable} from 'ts-serializer';


@Serialize({})



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  submitted = false;
  registerForm: FormGroup;
  selectedClient: any = [];
  public clientList: any = [];
  public itemList: any = [];
  clientNameList: any = [];
  itemNameList: any = [];
  orderList:any=[];
  
  constructor(private routes:Router,private builder: FormBuilder, private itemService: ItemService, private clientService: ClientService, private orderService: OrderService) {
    this.registerForm = builder.group({
      ClientName: ['', Validators.required],
      ItemName: ['', Validators.required],
      Quantity: ['', Validators.required],
      OrderDate: ['', Validators.required]
    })
  }



  get f() { return this.registerForm.controls; }
  ngOnInit() {
    this.clientService.getClient().subscribe(clientdata => {
      this.clientList = clientdata
      // console.log("clientList"+JSON.stringify(this.clientList));
      this.clientList.forEach(client => {
        this.clientNameList.push(client.name);
      });
      console.log(this.clientNameList);

    })
    err => {
      console.log(err);
    }

    this.itemService.getItem().subscribe(itemdata => {
      this.itemList = itemdata
      // console.log("itemList"+JSON.stringify(this.itemList));
      this.itemList.forEach(item => {
        // console.log("item"+JSON.stringify(item));

        this.itemNameList.push(item.itemName);
      });
      console.log(this.itemNameList);
    })
    err => {
      console.log(err);
    }

  }
  ClientName: string;
  ItemName: string;
  OrderDate: any;
  ItemQuantity: number;
  


  onSubmit() {
    // console.log(this.registerForm.value)
    //console.log(this.registerForm.value.ClientName)

    this.ClientName = this.registerForm.value.ClientName;
    // console.log(this.ClientName);
    this.ItemName = this.registerForm.value.ItemName;
    // console.log(this.ItemName);
    this.OrderDate = this.registerForm.value.OrderDate;
    // console.log(this.OrderDate);
    this.ItemQuantity = this.registerForm.value.Quantity;
    // console.log(this.ItemQuantity);
    this.orderList.push(this.registerForm.value);
    console.log(this.orderList,"sanjay");
    // this.orderList.push(this.ClientName,this.ItemName,this.ItemQuantity,this.OrderDate)
    //console.log(this.orderList);
    // this.orderListArray.push(this.orderList);
    // console.log(this.orderListArray);
   // console.log(this.orderList);
    // this.orderList.forEach(order => {
    //   this.orderListArray.push(order.orderList)
    // });
    // console.log("orderListArray"+this.orderListArray);
  }

  saveDb()
  {
    console.log(this.orderList)
    this.submitted = true;
    
    
    this.orderService.postOrderList(this.orderList)
      .subscribe(data => {
      console.log(data);
      this.routes.navigate(['List']);  
  if (this.registerForm.invalid) {
      return alert("Error")
  }

  alert('Saved Successfully')
});

  }



}




