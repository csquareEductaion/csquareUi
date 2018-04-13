import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OutputEmitter } from '@angular/compiler/src/output/abstract_emitter';
import { FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpModule, Http, Response } from '@angular/http';
import { CommonModalComponent } from 'app/shared/common-modal/common-modal.component';
import {CommonTemplateUsedService} from './common-template.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { SortPipe } from '../../../shared/pipes/filters/filter.pipe';

class leadGrade{
  gradeId: string;
  pk: string;
  leadId: string;
}

@Component({
  selector: 'private-tutor-common-template',
  styleUrls: [('./common-template.scss')],
  templateUrl: './common-template.html'
})

export class CommonTemplateComponent implements OnInit {



  enquiryForm: FormGroup;
  enquiryId: string;
 public firstName: AbstractControl;
 public lastName: AbstractControl;
 public phone: AbstractControl;
 public email: AbstractControl;
 public grade: AbstractControl;
 public comment: AbstractControl;
 public city: AbstractControl;
 public isstudent: AbstractControl;
 public istutor: AbstractControl;
 public leadGradeList: AbstractControl;
 locationSearchList: any[] = [];
  public locationName: AbstractControl;
 cityList: any[] = [];
 gradeL: any[] = [];
 gradeList: any[] =[];
 locationList: any[] = [];
 public location: AbstractControl;
 public gender: AbstractControl;
 message: any;
 public leadStatus: AbstractControl;
 loading: boolean = false;

 search = (text$: Observable<string>) =>
 text$
   .debounceTime(200)
   .distinctUntilChanged()
   .map(term => term.length < 1 ? []
     : this.locationSearchList.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));


//@Output() t1 = new EventEmitter;
@Input() area:string;
@Input() t1:string;
@Input() t1Url: string;
@Input() t1Exp: string;
@Input() t1Desp: string;
@Input() t2: string;
@Input() t2Url: string;
@Input() t2Exp: string;
@Input() t2Desp: string;
@Input() t3: string;
@Input() t3Url: string;
@Input() t3Exp: string;
@Input() t3Desp: string;
@Input() t4: string;
@Input() t4Url: string;
@Input() t4Exp: string;
@Input() t4Desp: string;
@Input() t5: string;
@Input() t5Url: string;
@Input() t5Exp: string;
@Input() t5Desp: string;
@Input() t6: string;
@Input() t6Url: string;
@Input() t6Exp: string;
@Input() t6Desp: string;
@Input() t7: string;
@Input() t7Url: string;
@Input() t7Exp: string;
@Input() t7Desp: string;
@Input() t8: string;
@Input() t8Url: string;
@Input() t8Exp: string;
@Input() t8Desp: string;
@Input() t9: string;
@Input() t9Url: string;
@Input() t9Exp: string;
@Input() t9Desp: string;
@Input() t10: string;
@Input() t10Url: string;
@Input() t10Exp: string;
@Input() t10Desp: string;
@Input() keyword: string;
areaMain: string;
 constructor(private fb: FormBuilder,private router: Router, private service: CommonTemplateUsedService,private http:Http,
   private route: ActivatedRoute,private modalService: NgbModal) {
     this.service.getAllRefCites().subscribe(data =>{
       this.cityList = data;
     })
     this.service.getAllRefGrades().subscribe(data =>{
       this.gradeList = data;
     })
     this.initForm();
     this.city.setValue('5');
   }


 ngOnInit() { 
   debugger;
       this.areaMain = this.area;
 }
 submit() {
   this.validationMessage();
   if(this.message){
     const activeModal = this.modalService.open(CommonModalComponent,{ size: 'lg' });
     activeModal.componentInstance.showHide = false;
     activeModal.componentInstance.modalHeader = "Warning";
     activeModal.componentInstance.modalContent = this.message;
   } else {
     if(!this.isstudent.value){
       this.isstudent.setValue(false);
     }
     if(!this.istutor.value){
       this.istutor.setValue(false);
     }
     const formValue: any = this.enquiryForm.value;  
    // //  this.spinnerService.hide();
    this.loading = true;
     this.service.addLead(formValue).subscribe(enquiry => {
       debugger;
       if(enquiry._body == "Email already exists"){
         const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
         activeModal.componentInstance.showHide = true;
         activeModal.componentInstance.modalHeader = 'Alert';
         activeModal.componentInstance.modalContent = 'Hello ' + this.firstName.value + ' ' + this.lastName.value + '. This email already exists. Check your email to get credentials for login.';
        // //  this.spinnerService.hide();
        this.loading = false;
       } else {
         const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
         activeModal.componentInstance.showHide = true;
         activeModal.componentInstance.modalHeader = 'Success';
         activeModal.componentInstance.modalContent = 'Thank you ' + this.firstName.value + ' ' + this.lastName.value + ' for contacting us we will reach you shortly!';
         this.enquiryForm.reset();
        // //  this.spinnerService.hide();
        this.loading = false;
       }
     });
   }
}
 cancel(){
     const activeModal = this.modalService.open(CommonModalComponent, { size: 'sm' });
     activeModal.componentInstance.showHide = true;
     activeModal.componentInstance.modalHeader = 'Alert';
     activeModal.componentInstance.modalContent = 'Are you sure you want to continue as you can miss a great opportunity!';
     activeModal.result.then ((res) => {
       if (res == 'Y') {
         this.enquiryForm.reset();
       } else if (res == 'N') {
         // What action should be performed on cancel of model goes here.
       }
     });
 }
 private initForm() {
   this.enquiryForm = this.fb.group({
     
     'firstName': ['', Validators.compose([Validators.required])],
     'phone': ['', Validators.compose([Validators.required,Validators.maxLength(10),
       Validators.minLength(10),Validators.pattern('[0-9]*')])],
     'email': ['', Validators.compose([Validators.required,Validators.email])],
     'grade': ['', Validators.compose([Validators.required])],
     'lastName': ['', Validators.compose([Validators.required])],
     'comment': [''],
     'city': [''],
     'isstudent': [''],
     'istutor': [''],
     'leadGradeList': [this.gradeL],
     'location': [''],
     'locationName': [''],
     'gender': [''],
     'leadStatus': ['1'],

    });

    this.firstName = this.enquiryForm.controls['firstName'];
    this.phone = this.enquiryForm.controls['phone'];
    this.email = this.enquiryForm.controls['email'];
    this.grade = this.enquiryForm.controls['grade'];
    this.lastName = this.enquiryForm.controls['lastName'];
    this.comment = this.enquiryForm.controls['comment'];
    this.city = this.enquiryForm.controls['city'];
    this.isstudent = this.enquiryForm.controls['isstudent'];
    this.istutor = this.enquiryForm.controls['istutor'];
    this.location = this.enquiryForm.controls['location'];
    this.locationName = this.enquiryForm.controls['locationName'];
    this.gender = this.enquiryForm.controls['gender'];
    this.leadStatus = this.enquiryForm.controls['leadStatus'];

    this.city.valueChanges.subscribe(val =>{
     this.locationName.reset();
     this.locationList = [];
     this.locationSearchList = [];
     this.service.searchLocationByCity().subscribe(data=>{
       this.locationList = data;
       let i = 0;
       data.forEach(element => {
         this.locationSearchList[i] = (element.pincode + ' ( ' +element.location_name+ ' )');
         i++;
       });
     })
   });

   this.locationName.valueChanges.subscribe(val=>{
     this.locationList.forEach(element => {
       if((element.pincode + ' ( ' +element.location_name+ ' )') == val){
         this.location.setValue(element.pk);
       }
     });
   })
   this.istutor.valueChanges.subscribe(val=>{
     if(val == true){
       const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
       activeModal.componentInstance.showHide = true;
       activeModal.componentInstance.modalHeader = "Warning!";
       activeModal.componentInstance.modalContent = "Are you sure you are a Tutor?";
       activeModal.result.then(res =>{
         if(res == 'Y'){
          this.router.navigateByUrl('/tutorForm');
         } else {
            this.istutor.reset();
         }
       })
     } 
   })
 this.grade.valueChanges.subscribe(val=>{ 
   debugger;
    const newItem = new leadGrade();
   newItem.gradeId = val;
   this.gradeL.push(newItem);
 })
}
buttonClick(data: any){
 this.router.navigateByUrl(data);
}

validationMessage(){
 if(this.isstudent.value == false){
   this.message = 'Please Select Student/Tutor Checkbox.'
 } else if(!this.firstName.value){
   this.message = 'Please Provide First Name.';
 } else if(!this.lastName.value){
   this.message = 'Please Provide Last Name.';
 } else if(!this.phone.value){
   this.message = 'Please Provide Phone Number.';
 } else if(!this.gender.value){
   this.message = 'Please Select Your Gender.';
 } else if(!this.grade.value){
   this.message = 'Please Select Your Grade.';
 } else if(!this.email.value){
   this.message = 'Please Provide Your Email.';
 } else if(!this.city.value){
   this.message = 'Please Select Your City.';
 } else if(!this.location.value){
   this.message = 'Please Select Your Location.';
 } else {
   this.message = "";
 }
}
}