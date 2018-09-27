import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/client.service';
import { ItemService } from 'src/app/item.service';
import { ClientModel } from 'src/app/client-model';
import { ItemModel } from 'src/app/item-model';
import { FormGroup,FormBuilder } from  '@angular/forms';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  
  public clientList:any=[];
  public itemList:any=[];
  clientNameList:any=[];
  itemNameList:any=[];
  constructor(private itemform:FormBuilder,private clientform: FormBuilder,private itemService:ItemService,private clientService:ClientService) { }

  clientForm: FormGroup;
  itemForm:FormGroup;
  ngOnInit() {
    this.clientService.getClient().subscribe(clientdata=>{
      this.clientList=clientdata
      // console.log("clientList"+JSON.stringify(this.clientList));
      this.clientList.forEach(client => {
        this.clientNameList.push(client.name);
      });
      console.log(this.clientNameList);
      
    })
    err=>{
      console.log(err);
    }
    this.clientForm=this.clientform.group({
      clientControl: [this.clientNameList[0]]
    })
    this.itemService.getItem().subscribe(itemdata=>{
      this.itemList=itemdata
      // console.log("itemList"+JSON.stringify(this.itemList));
      this.itemList.forEach(item => {
        // console.log("item"+JSON.stringify(item));
        
        this.itemNameList.push(item.itemName);
      });
      console.log(this.itemNameList);
    })
    err=>{
      console.log(err);
    }
    this.itemForm=this.itemform.group({
      itemControl: [this.itemNameList[0]]
    })
  }

}



   
    