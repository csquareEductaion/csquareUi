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
import {routing} from './home-tutor.routing';
import {HomeTutorComponent} from './home-tutor.component';
//import {HttpModule} from '@angular/http';
import { JWBootstrapSwitchModule } from "jw-bootstrap-switch-ng2";
import { HomeTutorInBangaloreComponent } from './home-tutor-in-bangalore/home-tutor-in-bangalore.component';
import { CommonTemplateComponent } from './common-template/common-template.component';
import { CommonTemplateUsedService, CommonTemplate } from './common-template/common-template.service';
import { LoadingModule } from 'ngx-loading';


@NgModule({
  imports: [
    //BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbDropdownModule,
    NgbModalModule,
    ScrollToModule,
    NgbModule.forRoot(),
   // NgbCarouselConfig,
   routing,
   LoadingModule
   
  ],
  declarations: [
    
    HomeTutorComponent,
    HomeTutorInBangaloreComponent,
    CommonTemplateComponent
  ],
  providers: [
    CommonTemplateUsedService
  ],
  entryComponents: [
    
    ]

})
export class HomeTutorModule {
}
