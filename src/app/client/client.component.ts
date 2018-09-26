import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private routes:Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Name: ['', Validators.required,Validators.maxLength(100)],
      Phone: ['', Validators.required,Validators.maxLength(10)],
      Address: ['', [Validators.required, Validators.maxLength(250)]],
      ItemID: ['', [Validators.required]]
  });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)')
}
onRegister()
{
  this.routes.navigate(['Order']);
}

}
