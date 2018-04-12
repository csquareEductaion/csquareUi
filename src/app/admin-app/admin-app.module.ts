import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { SharedModule } from '../shared/shared.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { JWBootstrapSwitchModule } from "jw-bootstrap-switch-ng2";
import { AdminAppRoutingModule } from './admin-app.routing';
import { LeadComponent } from './lead/lead.component';
import { EditLeadComponent } from './lead/editLead/editLead.component';
import { AdminAppComponent } from './admin-app.component';
import { StudentManagementComponent } from './studentManagement/studentManagement.component';
import { EditStudentManagementComponent } from './studentManagement/editStudentManagement/editStudentManagement.component';
import { TutorManagementComponent } from './tutorManagement/tutorManagement.component';
import {EditTutorManagementComponent} from './tutorManagement/editTutorManagement/editTutorManagement.component';
import { TutorSearchComponent } from './tutorSearch/tutorSearch.component';
import { TutorModalComponent } from './tutorSearch/tutor-modal/tutor-modal.component';
import { UserComponent } from './userManagement/userManagement.component';
import {EditUserComponent} from './userManagement/editUserManagement/editUserManagement.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AdminAppService } from './admin-app.service';
import { StudentLoggedInComponent } from './parent/student-logged-in/student-logged-in.component';
import { TutorLoggedInComponent } from './tutor/tutor-logged-in/tutor-logged-in.component';
import { TutorModelComponent } from './tutor/tutor-logged-in/tutor-model/tutor-model.component';
import { FullCalendarModule } from 'ng-fullcalendar';
import {EventService} from './tutor/tutor-logged-in/event.service';
import { LoadingModule } from 'ngx-loading';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbDropdownModule,
    NgbModalModule,
    SharedModule,
    ScrollToModule,
    NgbModule.forRoot(),
    AdminAppRoutingModule,
    Ng2SmartTableModule,
    AngularMultiSelectModule,
    FullCalendarModule,
    LoadingModule
  ],
  declarations: [
    AdminAppComponent,
    LeadComponent,
    EditLeadComponent,
    StudentManagementComponent,
    EditStudentManagementComponent,
    TutorManagementComponent,
    EditTutorManagementComponent,
    TutorSearchComponent,
    TutorModalComponent,
    UserComponent,
    EditUserComponent,
    ContactFormComponent,
    StudentLoggedInComponent,
    TutorLoggedInComponent,
    TutorModelComponent,
],
  providers: [
     TutorModalComponent,
     AdminAppService,
     TutorModelComponent,
     EventService
  ],
  entryComponents: [ TutorModalComponent, TutorModelComponent
    ]

})
export class AdminAppModule {
}
