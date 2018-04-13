import { AgmCoreModule, MouseEvent  } from '@agm/core';
import { Contact, ContactService } from './contact.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpModule, Http, Response } from '@angular/http';
import { CommonModalComponent } from 'app/shared/common-modal/common-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-contact',
    templateUrl: './contact.html',
    styleUrls: ['./contact.scss'],
    providers: [NgbCarouselConfig],
})

export class ContactComponent implements OnInit {
  
  lat: number = 12.9164;
  lng: number = 77.6190;
  zoom: number = 8;  
  
  contactForm: FormGroup;
  public name: AbstractControl;
  public email: AbstractControl;
  public phone: AbstractControl;
  public message: AbstractControl;

  constructor(private fb: FormBuilder,
    private router: Router, 
    private service: ContactService,
    private http:Http,
    private route: ActivatedRoute,
    private modalService: NgbModal, config: NgbCarouselConfig) { 
      this.initForm();
      config.interval = 3000;
      config.wrap = true;
      config.keyboard = false; 
    }

  ngOnInit() {}

submit() {
  const formValue: any = this.contactForm.value;
  if(this.contactForm.valid){
    //  this.spinnerService.hide();
    this.service.contactUs(formValue).subscribe(enquiry => {
       ;
      const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
      activeModal.componentInstance.showHide = true;
      activeModal.componentInstance.modalHeader = 'Alert';
      activeModal.componentInstance.modalContent = 'Thank you ' + this.name.value + ' for contacting us we will reach you shortly!';
      //  this.spinnerService.hide();
      this.contactForm.reset();
    });
  } else{
    const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
    activeModal.componentInstance.showHide = true;
    activeModal.componentInstance.modalHeader = 'Alert';
    activeModal.componentInstance.modalContent = 'Please Fill the form and then submit!';
  }
};
cancel(data: any){
   ;
  const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
  activeModal.componentInstance.showHide = true;
  activeModal.componentInstance.modalHeader = 'Alert';
  activeModal.componentInstance.modalContent = 'Are you sure want to Cancel?';
  activeModal.result.then ((res) => {
    if (res == 'Y') {
      this.router.navigateByUrl(data)
    } else if (res == 'N') {
      // What action should be performed on cancel of model goes here.
    }
  });
}
private initForm() {
  this.contactForm = this.fb.group({
    
    'name': ['', Validators.compose([Validators.required])],
    'phone': ['', Validators.compose([Validators.required])],
    'email': ['', Validators.compose([Validators.required,Validators.email])],
    'message': [''],    

   });

   this.name = this.contactForm.controls['name'];
   this.phone = this.contactForm.controls['phone'];
   this.email = this.contactForm.controls['email'];
   this.message = this.contactForm.controls['message'];
}
}

