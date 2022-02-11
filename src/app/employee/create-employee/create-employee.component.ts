import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  createform: FormGroup;
 loc:any;
user:any = {};
submitted=false;
  constructor(private router:Router, public formBuilder:FormBuilder) {
    this.createform = this.formBuilder.group({
      id:['', Validators.required],
      name:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      gender:['', Validators.required],
      status:['', Validators.required]
    });
   }

  ngOnInit(): void {
    this.loc=window.location.href;
  //   this.registerForm = this.formBuilder.group({
  //     name: ['', Validators.required],
  //     email: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]]
  // });
  }
submit(){
this.submitted=true;
 this.user = Object.assign(this.user,this.createform.value);
 this.addemployee(this.user);
 if (this.createform.invalid)
 return;
this.router.navigate(['/Employeelist']);
this.createform.reset();
this.submitted=false;
}

  addemployee(x: any) {
    let employees = [];
    if(localStorage.getItem('Employees')){
      employees = JSON.parse(localStorage.getItem('Employees'));
      employees = [x, ...employees];
    }
    else{
      employees = [x];
    }
    localStorage.setItem('Employees',JSON.stringify(employees));
  }
}
