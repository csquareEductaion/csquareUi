import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

import { HomeComponent } from './home.component';

import { ComponentsModule } from '../components/components.module';
//import {MatCardModule} from '@angular/material/card';
import { NouisliderModule } from 'ng2-nouislider';
//import { CommonModalComponent } from 'app/shared/common-modal/common-modal.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        ComponentsModule,
        NgxCarouselModule,
        NgbModule,
       // MatCardModule,
        NouisliderModule,
       // CommonModalComponent
        
    ],
    declarations: [ HomeComponent],
    exports:[ HomeComponent, ],
   // entryComponents: [CommonModalComponent ],
    providers: []
})
export class HomeModule { }
