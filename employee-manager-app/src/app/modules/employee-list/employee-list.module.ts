import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeListRoutingModule } from './employee-list-routing.module';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';


@NgModule({
  declarations: [
    EmployeeListComponent
  ],
  exports: [
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    EmployeeListRoutingModule
  ]
})
export class EmployeeListModule { }
