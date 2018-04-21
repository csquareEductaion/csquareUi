import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { Meta, Title } from "@angular/platform-browser";
import { Router } from '@angular/router';

@Component({    
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    public carouselOne: NgxCarousel;
    model = {
        left: true,
        middle: false,
        right: false
    };
    isCollapsedS1: any;
    isCollapsedS2: any;
    isCollapsedS3: any;
    usersCount: number = 0;
    studentCount: number = 0;
    tutorCount: number = 0;
    constructor ( private router: Router,
        meta: Meta, title: Title){  
        
            title.setTitle('Best private home Tuition Tutor, Teacher & Online Classes for Math, Science');

    meta.addTags([
      { name: 'author',   content: 'csquareeducation.com'},
      { name: 'description', content: 'Best ✓Qualified ✓Experienced ✓certified ✓trusted private tutor at your home. Services: personal tuition teacher, Online Classes for ICSE, CBSE, State, IGCSE board for Math, Science, English, Geometry, Social, Chemistry, Physic, Hindi along with 10th & 12th board exam previous year question paper ...' }
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
        this.usersCount = 6000;
        this.studentCount = 200;
        this.tutorCount = 5800;
      }
     
      buttonClick(data: any) {
       this.router.navigateByUrl(data);
     } 
      
}
