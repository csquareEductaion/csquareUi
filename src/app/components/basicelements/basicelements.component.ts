import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BasicElements, BasicelementsService } from './basicelements.service';
import { HttpModule, Http, Response } from '@angular/http';
import { CommonModalComponent } from 'app/shared/common-modal/common-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { SortPipe } from '../../shared/pipes/filters/filter.pipe';

class leadGrade{
  gradeId: string;
  pk: string;
  leadId: string;
}

@Component({
  selector: 'app-basicelements',
  templateUrl: './basicelements.component.html',
  styleUrls: ['./basicelements.component.scss'],
  providers: [NgbCarouselConfig],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "translateX(-100%)"
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class BasicelementsComponent implements OnInit{

  state = 'hide';

    constructor(private fb: FormBuilder,
      private router: Router,
       private service: BasicelementsService,
       private http:Http,
      private route: ActivatedRoute,
      private modalService: NgbModal,
      config: NgbCarouselConfig,
      public el: ElementRef ) { 
      config.interval = 3000;
      config.wrap = true;
      config.keyboard = true;
      }

      @HostListener('window:scroll', ['$event'])
      checkScroll() {
        const componentPosition = this.el.nativeElement.offsetTop
        const scrollPosition = window.pageYOffset

        if (scrollPosition <= componentPosition) {
          this.state = 'show'
        } else {
          this.state = 'hide'
        }

      }

      ngOnInit() {
      }

      buttonClick(data: any){
        this.router.navigateByUrl(data);
      }
}
