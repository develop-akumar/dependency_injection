import { Component, OnInit } from '@angular/core';
import { Comp3Service } from 'src/app/compServices/comp3.service';
import { S2Service } from 'src/app/services/s2.service';
import { S3Service } from 'src/app/services/s3.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.scss']
})
export class Comp4Component implements OnInit {

  constructor(
    private s2: S2Service,
    private s3:S3Service,
    private comp3service : Comp3Service
  ) { }

  ngOnInit(): void {
    // console.log('this.s2.s2count = ', this.s2.s2count);
    ++this.comp3service.studentCount
    console.log('this singleton comp3Service.studentCount +2  = ', ++this.comp3service.studentCount);
  }

}
