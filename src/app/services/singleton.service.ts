import { Injectable, OnDestroy } from '@angular/core';

@Injectable(
  {
  providedIn: 'root'
})
export class SingletonService implements OnDestroy{
  scount:number = 0

  constructor() {
    this.scount++; 
    console.log('Singleton sevice loaded = ');
  }

  ngOnDestroy(){
    console.log('singleton  service destroyed = ', );
  }
}
