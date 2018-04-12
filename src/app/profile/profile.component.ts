import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    providers: [NgbCarouselConfig],
})

export class ProfileComponent implements OnInit {

    constructor(config: NgbCarouselConfig) { 
        config.interval = 3000;
        config.wrap = true;
        config.keyboard = false;
    }

    ngOnInit() {}

}
