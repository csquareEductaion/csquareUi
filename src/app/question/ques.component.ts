import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { trigger, state, style, animate, transition, keyframes} from '@angular/animations';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { Meta, Title } from "@angular/platform-browser";

@Component({    
    selector: 'app-question',
    templateUrl: './ques.html',
    styleUrls: ['./ques.scss'],
    providers: [NgbCarouselConfig],
    animations: [
        trigger('flyInOut', [
          state('in', style({transform: 'translateX(0)'})),
          transition('void => *', [
            animate(2000, keyframes([
              style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
             // style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
              style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
            ]))
          ])
        ]),
        trigger('flyDown', [
            state('in', style({transform: 'translateY(0)'})),
            transition('void => *', [
              animate(2000, keyframes([
                style({opacity: 0, transform: 'translateY(-100%)', offset: 0}),
               // style({opacity: 1, transform: 'translateY(15px)',  offset: 0.3}),
                style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
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

export class QuesComponent implements OnInit {
    public carouselOne: NgxCarousel;
    model = {
        left: true,
        middle: false,
        right: false
    };

    constructor(config: NgbCarouselConfig,  meta: Meta, title: Title) {
      config.interval = 3000;
      config.wrap = true;
      config.keyboard = false;

      title.setTitle('Cbse, Icse, Karnataka Board Previous Year Question Paper class 10 & 12');

    meta.addTags([
      { name: 'author',   content: 'csquareeducation.com'},
      { name: 'description', content: 'Previous 5 years question paper cbse, icse, karnataka board for class 10 & 12 of mathematics, physics, chemistry, biology, english, social-science, hindi and other in one click.' }
    ]);
    }

    ngOnInit() {
        this.carouselOne = {
          grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
          slide: 10,
          speed: 200,
          interval: 2000,
          point: {
            visible: true
          },
          load: 2,
          touch: true,
          loop: true,
          custom: 'banner'
        }
      }
     
      public myfunc(event: Event) {
         // carouselLoad will trigger this funnction when your load value reaches
         // it is helps to load the data by parts to increase the performance of the app
         // must use feature to all carousel
      }
      
}
