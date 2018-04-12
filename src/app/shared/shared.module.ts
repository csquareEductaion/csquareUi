//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { NouisliderModule } from 'ng2-nouislider';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModalComponent } from 'app/shared/common-modal/common-modal.component';
import { LoggedInNavComponent } from './loggedInNav/loggedInNavbar.component';
import { LoggedInService, LoggedIn } from './loggedInNav/loggedInNavbar.service';
import { FilterPipeModule } from './pipes/filters/fliter.module';

@NgModule({
    imports: [
        CommonModule,
       // BrowserModule,
        FormsModule,
        RouterModule,
        NgxCarouselModule,
        NgbModule,
        NouisliderModule,
        ReactiveFormsModule,
        FilterPipeModule
        
    ],
    entryComponents: [
        CommonModalComponent,
        LoggedInNavComponent
      ],
    declarations: [CommonModalComponent, LoggedInNavComponent ],
    exports:[  CommonModalComponent, LoggedInNavComponent],
    providers: [ LoggedInService ]
})
export class SharedModule { }