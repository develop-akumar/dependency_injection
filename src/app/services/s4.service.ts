import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class S4Service implements OnDestroy {

  constructor() { }

   ngOnDestroy(){
    // console.log('S4 Service  destroyed = ', );
  }
}
