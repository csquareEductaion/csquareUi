import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes} from '@angular/animations';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    providers: [NgbCarouselConfig],
    animations: [
        trigger('flyInOut', [
          state('in', style({transform: 'translateX(0)'})),
          transition('void => *', [
            animate(2000, keyframes([
              style({opacity: 1, transform: 'translateX(-100%)', offset: 0}),
              //style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
              style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
            ]))           
          ])
        ]),
        trigger('flyDown', [
            state('in', style({transform: 'translateY(0)'})),
            transition('void => *', [
              animate(2000, keyframes([
                style({opacity: 1, transform: 'translateY(-100%)', offset: 0}),
               // style({opacity: 1, transform: 'translateY(15px)',  offset: 0.3}),
                style({opacity: 0, transform: 'translateY(0)',     offset: 1.0})
              ]))
            ])
          ]),
          trigger('flyOutIn', [
            state('in', style({transform: 'translateX(100%)'})),
            transition('void => *', [
              animate(2000, keyframes([
                style({opacity: 1, transform: 'translateX(100%)',     offset: 0}),
                //style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
                style({opacity: 0, transform: 'translateX(0)',  offset: 1.0})
              ]))
            ])
          ])
    ]
})
export class NavigationComponent implements OnInit {

    constructor(config: NgbCarouselConfig,
      private router: Router,) {
      config.interval = 2000;
      config.wrap = true;
      config.keyboard = true;
     }

    ngOnInit() {}

    buttonClick(data: any) {
       ;
      this.router.navigateByUrl(data);
    } 
}
