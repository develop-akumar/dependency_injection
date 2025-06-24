import { Component } from '@angular/core';
import { SingletonService } from './services/singleton.service';
import { S3Service } from './services/s3.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';

  constructor(
    // private ingleton:SingletonService,
  ){
    
  }
}
