import { NgModule, Component } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BannerComponent } from './shared/banner/banner.component';

import { StudentComponent } from './studentForm/student.component';
import { TutorComponent } from './tutorForm/tutor.component';
import { LoggedInNavComponent } from './shared/loggedInNav/loggedInNavbar.component';


const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           loadChildren: './signup/signup.module#SignupModule' },
    { path: 'banner',          component: BannerComponent },
    { path: 'loggedInNavbar', component: LoggedInNavComponent},
    { path: 'media',         loadChildren: './media/media.module#MediaModule' },    
    { path: 'about',      loadChildren: './about/about.module#AboutModule' },
    { path: 'studentForm',      component: StudentComponent },
    { path: 'tutorForm',      component: TutorComponent },
    { path: 'privacy',      loadChildren: './privacy/privacy.module#PrivacyModule' },
    { path: 'question',      loadChildren: './question/ques.module#QuesModule' },
    { path: 'terms',      loadChildren: './terms/terms.module#TermsModule'},
    { path: 'tutors-review',      loadChildren: './tutors/tutors.module#TutorsModule' },
    { path: 'contact',      loadChildren: './contact/contact.module#ContactModule' },
    { path: 'parents-review',      loadChildren: './parents/parents.module#ParentsModule' },
    { path: 'careers',      loadChildren: './careers/careers.module#CareersModule' },
   // { path: 'bangalore',     loadChildren: './bangalore/bangalore.module#BangaloreModule'},
    { path: 'admin-app',      loadChildren: './admin-app/admin-app.module#AdminAppModule' },

    
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    CommonModule,
    //BrowserModule,
    NoopAnimationsModule,
    RouterModule.forRoot(routes, {useHash:true})
  ],
  exports: [
  ]
})
export class AppRoutingModule { }
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);