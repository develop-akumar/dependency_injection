import { Injectable, OnDestroy } from '@angular/core';

@Injectable(
// {
  // providedIn: 'root'
// }

)

// This service is registered in the app module

export class S2Service implements OnDestroy {
s2count = 0
  constructor() { 
    // console.log('s2 service loaded = ', );
  }

  ngOnDestroy(){
    // console.log('s2 service destroyed = ', );
  }
}
