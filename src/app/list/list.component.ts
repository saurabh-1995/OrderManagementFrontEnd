import {Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from 'src/app/order.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ListService } from '../list.service';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/modal.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit , OnDestroy {
  @Input() id: string;
  private element: any;
  submitted = false;
  registerForm: FormGroup;
  selectedList: any = [];
  public totalList: any = [];
  public itemList: any = [];
  clientNameList: any = [];
  itemNameList: any = [];
  quantityList:any=[];
  dateList:any=[];
  

  constructor(private modalService: ModalService, private el: ElementRef,
     private orderService:OrderService,private listService:ListService,private routes:Router,
     private builder:FormBuilder) {
    this.registerForm = builder.group({
      ClientName: ['', Validators.required],
      ItemName: ['', Validators.required],
      Quantity: ['', Validators.required],
      OrderDate: ['', Validators.required]
    })
    this.element = el.nativeElement;

   }
   bodyText: any[];
   
   get f() { return this.registerForm.controls; }

  ngOnInit() {
    this.orderService.getOrderList().subscribe(listdata => {
      this.totalList = listdata
      //  console.log("clientList"+JSON.stringify(this.totalList));
      console.log(this.totalList);
    this.bodyText=this.totalList;
    
    
  });
  let modal = this;
  console.log("myModal",modal);
  if (!this.id) {
    console.error('modal must have an id');
    return;
}
document.body.appendChild(this.element);

        // close modal on background click
        this.element.addEventListener('click', function (e: any) {
            if (e.target.className === 'modal') {
                modal.close();
            }
        });
        this.modalService.add(this);

  }
openModal(id:string) {
  console.log("saurabh",id)
     this.modalService.open(id);
     console.log("plzsendmeID",id);
}

closeModal(id: string) {
    this.modalService.close(id);
}
ngOnDestroy(): void {
  this.modalService.remove(this.id);
  this.element.remove();
}
open(): void {
  this.element.style.display = 'block';
  document.body.classList.add('modal-open');
}
close(): void {
  this.element.style.display = 'none';
  document.body.classList.remove('modal-open');
}
  

  
}

  
