import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpModule, Http, Response } from '@angular/http';


@Component({
  selector: 'private-tutor-common-template',
  styleUrls: [('./common-template.scss')],
  templateUrl: './common-template.html'
})

export class CommonTemplateComponent implements OnInit {

//@Output() t1 = new EventEmitter;
@Input() area:string;
@Input() t1:string;
@Input() t1Url: string;
@Input() t1Exp: string;
@Input() t1Desp: string;
@Input() t2: string;
@Input() t2Url: string;
@Input() t2Exp: string;
@Input() t2Desp: string;
@Input() t3: string;
@Input() t3Url: string;
@Input() t3Exp: string;
@Input() t3Desp: string;
@Input() t4: string;
@Input() t4Url: string;
@Input() t4Exp: string;
@Input() t4Desp: string;
@Input() t5: string;
@Input() t5Url: string;
@Input() t5Exp: string;
@Input() t5Desp: string;
@Input() t6: string;
@Input() t6Url: string;
@Input() t6Exp: string;
@Input() t6Desp: string;
@Input() t7: string;
@Input() t7Url: string;
@Input() t7Exp: string;
@Input() t7Desp: string;
@Input() t8: string;
@Input() t8Url: string;
@Input() t8Exp: string;
@Input() t8Desp: string;
@Input() t9: string;
@Input() t9Url: string;
@Input() t9Exp: string;
@Input() t9Desp: string;
@Input() t10: string;
@Input() t10Url: string;
@Input() t10Exp: string;
@Input() t10Desp: string;
@Input() keyword: string;
areaMain: string;
 constructor(private router: Router,private http:Http,
   private route: ActivatedRoute) {
   }


 ngOnInit() { 
       this.areaMain = this.area;
 }
 
buttonClick(data: any){
 this.router.navigateByUrl(data);
}


}