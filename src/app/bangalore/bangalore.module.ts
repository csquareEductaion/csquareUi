import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
//import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
//import { BrowserModule } from '@angular/platform-browser';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { SharedModule } from '../shared/shared.module';
import {routing} from './bangalore.routing';
import {BangaloreComponent} from './bangalore.component';
//import {HttpModule} from '@angular/http';
import { JWBootstrapSwitchModule } from "jw-bootstrap-switch-ng2";
import { PrivateTuitionInBangaloreComponent } from './private-tuition/private-tuition-in-bangalore/private-tuition-in-bangalore.component';
import { PrivateTuitionComponent } from './private-tuition/private-tuition.component';
import { PrivateTutorComponent } from './private-tutor/private-tutor.component';
import { PrivateTutorInBangaloreComponent } from './private-tutor/private-tutor-in-bangalore/private-tutor-in-bangalore.component';
import { LoadingModule } from 'ngx-loading';
import { FilterPipeModule } from '../shared/pipes/filters/fliter.module';

@NgModule({
  imports: [
    //BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbDropdownModule,
    NgbModalModule,
    SharedModule,
    ScrollToModule,
    NgbModule.forRoot(),
   // NgbCarouselConfig,
   routing,
   LoadingModule,
   FilterPipeModule
  ],
  declarations: [
    
  BangaloreComponent,
    
 // PrivateTutorComponent,
    
  //PrivateTutorInBangaloreComponent,
],
  providers: [
  ],
  entryComponents: [
    ]

})
export class BangaloreModule {
}
