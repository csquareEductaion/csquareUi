import { Component, OnInit, Inject, Renderer, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { DOCUMENT } from '@angular/platform-browser';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private _router: Subscription;
    nav: boolean;

    @ViewChild(NavbarComponent) navbar: NavbarComponent;

    constructor( private renderer : Renderer, private router: Router, @Inject(DOCUMENT,) private document: any, private element : ElementRef, public location: Location) {}
    ngOnInit() {
        var navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }else{
                window.document.activeElement.scrollTop = 0;
            }
            if(this.nav == true) {
                this.navbar.sidebarClose();
            }
        });

        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');

        }

    }
    removeFooter() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice( 1 );
        let titleLogged = titlee.split('/');
        if(titleLogged[1] === 'signup' || titleLogged[1] === 'admin-app'){
            return false;
        } else {
            return true;
        }
    }


    removeNav(){
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice( 1 );
        let titleLogged = titlee.split('/');
        if(titleLogged[1] === 'admin-app'){
            this.nav = false;
            return false;
        } else {
            this.nav = true;
            return true;
        }
    }

    removeBanner(){
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice( 1 );
        let titleLogged = titlee.split('/');
        if(titleLogged[1] === 'signup' || titleLogged[1] === 'admin-app' || titleLogged[1] === 'tutorForm' ||
         titleLogged[1] === 'studentForm' || titleLogged[1] == 'about' || titleLogged[1] == 'question' ||
        titleLogged[1] == 'contact' ){
            return false;
        } else {
            return true;
        }
    }
}
