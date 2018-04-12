import { Component, OnInit, Renderer } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { ScrollToService } from 'ng2-scroll-to-el';
import { Router } from '@angular/router';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.html',
    styleUrls: ['./banner.scss'],
})

export class BannerComponent implements OnInit {
    page = 4;
    page1 = 5;
    date: {year: number, month: number};
    model: NgbDateStruct;
    constructor(private scrollService: ScrollToService,
        private router: Router,
         private renderer : Renderer, config: NgbCarouselConfig) {
        config.interval = 3000;
        config.wrap = true;
        config.keyboard = true;
      }
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }

    ngOnInit() {
        let input_group_focus = document.getElementsByClassName('form-control');
        let input_group = document.getElementsByClassName('input-group');
        for (let i = 0; i < input_group.length; i++) {
            input_group[i].children[0].addEventListener('focus', function (){
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function (){
                input_group[i].classList.remove('input-group-focus');
            });
        }
    }
    scrollElement(element,duration) {
        this.scrollService.scrollTo(element,duration);
    }  
    buttonClick(data: any) {
        debugger;
        this.router.navigateByUrl(data);
      }  
}
