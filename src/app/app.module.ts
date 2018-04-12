//import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { routing, appRoutingProviders }  from './app.routing';
import { AppComponent } from './app.component';
import { BannerComponent } from './shared/banner/banner.component';
//import { CommonTemplateComponent } from './home-tuition/components/common-template/common-template.component';
 //import { CommonTemplateService } from './home-tuition/components/common-template/common-template.service';


import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './studentForm/student.component';
import { StudentService } from './studentForm/student.service';
import { TutorComponent } from './tutorForm/tutor.component';
import { TutorService } from './tutorForm/tutor.service';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { JWBootstrapSwitchModule } from "jw-bootstrap-switch-ng2";
import { ScrollToModule } from 'ng2-scroll-to-el';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import {TeximateModule} from "ng-teximate";
import {BasicelementsService} from './components/basicelements/basicelements.service';
import {HttpModule} from '@angular/http';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { BangaloreComponent } from './bangalore/bangalore.component';
import { LoadingModule } from 'ngx-loading';
import { FilterPipeModule } from './shared/pipes/filters/fliter.module';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    StudentComponent,
    TutorComponent,
    BannerComponent,

  ],
  imports: [
    NoopAnimationsModule,
    AngularMultiSelectModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    ScrollToModule.forRoot(),
    TeximateModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    JWBootstrapSwitchModule,
    HomeModule,
    HttpModule,
    ReactiveFormsModule,
    SharedModule,
    Ng2SmartTableModule,
    LoadingModule,
    FilterPipeModule
  ],
  entryComponents: [  ],
  providers: [
    BasicelementsService,
    StudentService,
    TutorService,
    appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
