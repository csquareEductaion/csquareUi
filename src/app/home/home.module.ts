import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

import { HomeComponent } from './home.component';
import { NouisliderModule } from 'ng2-nouislider';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        NgxCarouselModule,
        NgbModule,
        NouisliderModule,
        
    ],
    declarations: [ HomeComponent],
    exports:[ HomeComponent, ],
   // entryComponents: [CommonModalComponent ],
    providers: []
})
export class HomeModule { }
