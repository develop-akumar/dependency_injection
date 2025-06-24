import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp3Component } from './comp3/comp3.component';
import { RouterModule, Routes } from '@angular/router';
import { S3Service } from '../services/s3.service';

const routes:Routes = [
  {path:"", component:Comp3Component}
]


@NgModule({
  declarations: [
    Comp3Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers:[
    S3Service
  ]
})
export class Module3Module { }
