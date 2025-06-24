import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  // {path:"", component:AppComponent},
  {path:"mod2", loadChildren: ()=> import('./module2/module2.module').then(m => m.Module2Module)},
  {path:"mod3", loadChildren:()=> import('./module3/module3.module').then(m => m.Module3Module)},
  {path:"mod4", loadChildren:()=>import('./module4/module4.module').then(m=>m.Module4Module)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
