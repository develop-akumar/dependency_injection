import { Injectable, OnDestroy } from '@angular/core';
import { SingletonService } from '../services/singleton.service';

@Injectable({
  providedIn: 'root'
})
export class Comp3Service implements OnDestroy {
studentCount = 0
  constructor(private singleton: SingletonService) {
    console.log('Comp3Service Loaded = ',);

  }

  ngOnDestroy() {
    console.log('Comp3Service destroyed = ',);
  }
}
