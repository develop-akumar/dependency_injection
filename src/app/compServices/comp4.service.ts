import { Injectable } from '@angular/core';
import { SingletonService } from '../services/singleton.service';

@Injectable({
  providedIn: 'root'
})
export class Comp4Service {

  constructor(private singleton:SingletonService) { }
}
