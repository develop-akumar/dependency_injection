import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp2Component } from './comp2/comp2.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path:"", component:Comp2Component}
]

@NgModule({
  declarations: [
    Comp2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class Module2Module { }
