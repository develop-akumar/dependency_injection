import { Injectable, OnDestroy } from '@angular/core';

@Injectable(
  {
    providedIn: 'root'
  }

)

/**
 * This service is singleton 
 * and registered in the  3rd and 4th module separately
 * and component specific with comp2.
 * It have the separate instance for both the modules.
 * */
export class S3Service implements OnDestroy {

  s3count = 11

  constructor() {
    // console.log('s3 service loaded = ',);
  }

  

  ngOnDestroy() {
    // console.log('s3 service destroyed = ',);
  }
}
