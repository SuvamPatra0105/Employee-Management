import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { ShowEmployeeComponent } from './show-employee/show-employee.component';

const routes: Routes = [
  {path:'', component:CreateEmployeeComponent},
  {path:'CreateEmployee', component:CreateEmployeeComponent},
  {path:'Employeelist', component:ShowEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
