import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';

import { BasicelementsComponent } from './basicelements/basicelements.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ComponentsComponent } from './components.component';
import { ReactiveFormsModule } from '@angular/forms';
import {BasicelementsService} from './basicelements/basicelements.service'
//import { CommonModalComponent } from 'app/shared/common-modal/common-modal.component';
import { LoadingModule } from 'ngx-loading';
import { FilterPipeModule } from '../shared/pipes/filters/fliter.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        JWBootstrapSwitchModule,
        ReactiveFormsModule,
        LoadingModule,
        FilterPipeModule
    ],
    declarations: [
        ComponentsComponent,
        BasicelementsComponent,
        NavigationComponent,
    ],
    providers: [
        BasicelementsService
    ],
    entryComponents: [],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
