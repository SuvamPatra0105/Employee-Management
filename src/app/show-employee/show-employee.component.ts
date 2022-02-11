import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {
list:any=[];
user:any = {};
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.list=JSON.parse(localStorage.getItem('Employees'));

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


del(id:any){
  localStorage.removeItem('Employees');
this.list.forEach((element: { id: any; }) => {
  if(element.id != id)
{
this.user = Object.assign(this.user,element);
 this.addemployee(this.user);
 }
});
this.list=JSON.parse(localStorage.getItem('Employees'));
}
updateall(x:any, y:string){
  localStorage.removeItem('Employees');
let val=prompt("Enter new value:");
if(val!=null){
this.list.forEach((element) => {
  if(element.id == x){
    if(y=='id')
  element.id = val;
  if(y=='name')
  element.name = val;
  if(y=='email')
  element.email = val;
  if(y=='gender'){
    while(val!="Male" && val!="Female" && val!="male" && val!="female"){
      console.log(val);
      if(val==null)
      break;
      else
      val = prompt("Enter Male or Female:");

    }
    if(val!=null){
   let newval = val.substring(0,1).toUpperCase();
  element.gender = newval + val.substring(1);
    }
  }
  if(y=='status')
  {
    while(val!="Active" && val!="Inactive" && val!="active" && val!="inactive"){
      if(val==null)
      break;
      else
      val = prompt("Enter Active or Inactive:");

    }
    if(val!=null){
       let newval1 = val.substring(0,1).toUpperCase();
  element.status = newval1 + val.substring(1);
  }
}

}

this.user = Object.assign(this.user,element);
 this.addemployee(this.user);
});
this.list=JSON.parse(localStorage.getItem('Employees'));
}
}


navigate(){
  this.router.navigate(['/CreateEmployee']);
}
}
