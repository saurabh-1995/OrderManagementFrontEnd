import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService} from 'src/app/item.service';
import { ItemModel} from 'src/app/item-model';
import { Http } from '@angular/http';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private routes:Router,private itemService:ItemService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      
      
      ItemName: ['', [Validators.required,Validators.maxLength(100)]],
      ItemCategory: ['', [Validators.required]],
      ItemQuantity: ['', [Validators.required]],
      
  });
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    
    
    this.submitted = true;
    
    
      this.itemService.postItem(this.registerForm.value)
        .subscribe(data => {
        console.log(data);
          this.routes.navigate(['Client']);  
         // this.toastr.success('New Record Added Succcessfully', 'Employee Register');
         

    // // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    alert('Item-Registration Successful')
});


}

}
