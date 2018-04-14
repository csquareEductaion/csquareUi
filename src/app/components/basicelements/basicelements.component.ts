import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BasicElements, BasicelementsService } from './basicelements.service';
import { HttpModule, Http, Response } from '@angular/http';
import { CommonModalComponent } from 'app/shared/common-modal/common-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { SortPipe } from '../../shared/pipes/filters/filter.pipe';

class leadGrade{
  gradeId: string;
  pk: string;
  leadId: string;
}

@Component({
  selector: 'app-basicelements',
  templateUrl: './basicelements.component.html',
  styleUrls: ['./basicelements.component.scss'],
  providers: [NgbCarouselConfig],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "translateX(-100%)"
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class BasicelementsComponent implements OnInit{

  state = 'hide'
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
  public location: AbstractControl;
  public gender: AbstractControl;
  public leadStatus: AbstractControl;
  cityList: any[] = [];
  gradeL: any[] = [];
  gradeList: any[] =[];
  locationList: any[] = [];
  locationSearchList: any[] = [];
  public leadSyllabusList: AbstractControl;
  public locationName: AbstractControl;
  message: any;
  loading: boolean = false;

  search = (text$: Observable<string>) =>
  text$
    .debounceTime(200)
    .distinctUntilChanged()
    .map(term => term.length < 1 ? []
      : this.locationSearchList.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));
 

    constructor(private fb: FormBuilder,
      private router: Router,
       private service: BasicelementsService,
       private http:Http,
      private route: ActivatedRoute,
      private modalService: NgbModal,
      config: NgbCarouselConfig,
      public el: ElementRef ) { 
      config.interval = 3000;
      config.wrap = true;
      config.keyboard = true;
        this.service.getAllRefCites().subscribe(data =>{
          this.cityList = data;
        })
        this.service.getAllRefGrades().subscribe(data =>{
          this.gradeList = data;
        })
        
        this.initForm();
      }

      @HostListener('window:scroll', ['$event'])
      checkScroll() {
        const componentPosition = this.el.nativeElement.offsetTop
        const scrollPosition = window.pageYOffset

        if (scrollPosition <= componentPosition) {
          this.state = 'show'
        } else {
          this.state = 'hide'
        }

      }

      ngOnInit() {
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
          ////  this.spinnerService.hide();
          this.loading = true;
          this.service.addLead(formValue).subscribe(enquiry => {
            if(enquiry._body == "Email already exists"){
              const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
              activeModal.componentInstance.showHide = true;
              activeModal.componentInstance.modalHeader = 'Alert';
              activeModal.componentInstance.modalContent = 'Hello ' + this.firstName.value + ' ' + this.lastName.value + '. This email already exists. Check your email to get credentials for login.';
              ////  this.spinnerService.hide();
              this.loading = false;
            } else {
              const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
              activeModal.componentInstance.showHide = true;
              activeModal.componentInstance.modalHeader = 'Success';
              activeModal.componentInstance.modalContent = 'Thank you ' + this.firstName.value + ' ' + this.lastName.value + ' for contacting us we will reach you shortly!';
              //this.enquiryForm.reset();
              this.initForm();
             // //  this.spinnerService.hide();
             this.loading = false;
            }
          });
        }
    }
    cancel(){
        const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
        activeModal.componentInstance.showHide = true;
        activeModal.componentInstance.modalHeader = 'Alert';
        activeModal.componentInstance.modalContent = 'Are you sure you want to continue as you can miss a great opportunity!';
        activeModal.result.then ((res) => {
          if (res == 'Y') {
            this.enquiryForm.reset();
            this.enquiryForm.enable();
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
        'comment': ['', Validators.compose([Validators.required])],
        'city': ['', Validators.compose([Validators.required])],
        'isstudent': ['', Validators.compose([Validators.required])],
        'istutor': [''],
        'leadGradeList': [this.gradeL],
        'gender': ['', Validators.compose([Validators.required])],
        'location': ['', Validators.compose([Validators.required])],
        'locationName': [''],
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
       this.gender = this.enquiryForm.controls['gender'];
       this.locationName = this.enquiryForm.controls['locationName'];
       this.leadStatus = this.enquiryForm.controls['leadStatus'];

       this.city.valueChanges.subscribe(val =>{
         this.location.enable();
        this.locationName.reset();
        this.locationList = [];
        this.locationSearchList = [];
        this.service.searchLocationByCity(val).subscribe(data=>{
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
        const newItem = new leadGrade();
        newItem.gradeId = val;
        this.gradeL.push(newItem);
      });
      this.city.valueChanges.subscribe(val =>{
        this.service.searchLocationByCity(val).subscribe(data=> {
          this.locationList = data;
        })
      });
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
