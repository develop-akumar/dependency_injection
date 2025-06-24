import { Component, OnInit } from '@angular/core';
import { Comp2Service } from 'src/app/compServices/comp2.service';
import { S2Service } from 'src/app/services/s2.service';
import { S3Service } from 'src/app/services/s3.service';
import { SingletonService } from 'src/app/services/singleton.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss'],
  providers:[Comp2Service]
})
export class Comp2Component implements OnInit {

  constructor(
    private singleton:SingletonService,
    private s2:S2Service,
    private s3:S3Service,
    private comp2service : Comp2Service
  ) { }

  ngOnInit(): void {
    // console.log('this.singleton.scount = ', this.singleton.scount);
    // ++this.s3.s3count
    // console.log('++this.s3.s3count = ', ++this.s3.s3count);
    
  }

}
