import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp4Component } from './comp4/comp4.component';
import { RouterModule, Routes } from '@angular/router';
import { S3Service } from '../services/s3.service';

const routes: Routes = [
  { path: "", component: Comp4Component }
]

@NgModule({
  declarations: [
    Comp4Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[S3Service]
})

export class Module4Module { }
