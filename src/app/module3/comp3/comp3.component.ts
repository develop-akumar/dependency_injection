import { Component, OnInit } from '@angular/core';
import { Comp3Service } from 'src/app/compServices/comp3.service';
import { S2Service } from 'src/app/services/s2.service';
import { S3Service } from 'src/app/services/s3.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss'],
  providers: [S3Service,
    Comp3Service
  ]
})
export class Comp3Component implements OnInit {

  constructor(
    private s2: S2Service,
    private s3: S3Service,
    private comp3Service: Comp3Service
  ) { }

  ngOnInit(): void {
    if (this.s3.s3count)
      this.s3.s3count *= 3
    // console.log('this.s3.s3count = ', ++this.s3.s3count);
    console.log('this. comp specific comp3Service.studentCount = ', this.comp3Service.studentCount);
  }

}
