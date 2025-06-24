import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Comp2Service implements OnDestroy {

  constructor() {
    console.log('comp2 service Loaded = ', );
   }

  ngOnDestroy(){
    console.log('comp2service Destroyed = ', );
  }
}
