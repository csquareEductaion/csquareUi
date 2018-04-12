import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { Meta, Title } from "@angular/platform-browser";

@Component({    
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
    public carouselOne: NgxCarousel;
    model = {
        left: true,
        middle: false,
        right: false
    };
    constructor (
        meta: Meta, title: Title){  
        
            title.setTitle('About us :CsquareEducation');

    meta.addTags([
      { name: 'author',   content: 'csquareeducation.com'},
      { name: 'description', content: 'CsquareEducation is home tutoring & Online Classes service provider with very dedicated and qualified team. We are working towands enhancement of education in India.' }
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
