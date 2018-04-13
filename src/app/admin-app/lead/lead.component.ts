import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { AdminAppService } from '../admin-app.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModalComponent } from 'app/shared/common-modal/common-modal.component';
@Component({
    selector: 'admin-app-lead',
    templateUrl: './lead.html',
    styleUrls: ['./lead.scss'],
    providers: [NgbCarouselConfig],
})

export class LeadComponent implements OnInit {

  leadList: any[] = [];  
  cityList: any[] = [];
  leadStatusList: any[] = [];  
  userType: boolean = false;
  source: LocalDataSource = new LocalDataSource();
  offset: any = -1;
  limit: any = -1;
  settings: any;
  sessionId: any;
  loading: any;


  prepareSettings() {
    return {
      actions: {
        position: 'right',
        },
        mode: 'external',
        add: {
          addButtonContent: '<i class="fa fa-plus-square-o"></i>',
          createButtonContent: '<i class="ion-checkmark"></i>',
          cancelButtonContent: '<i class="fa fa-ban"></i>',
          confirmCreate: true,
        },
        edit: {
          editButtonContent: '<i class="fa fa-pencil"></i>',
          saveButtonContent: '<i class="fa fa-check"></i>',
          cancelButtonContent: '<i class="fa fa-ban"></i>',
          confirmSave: true,
        },
        delete: {
          deleteButtonContent: '<i class="fa fa-trash"></i>',
          confirmDelete: true
        },
        pager: {
            display: true,
            perPage: 50
          },
        columns: {
           firstName: {
            title: 'First Name',
            type: 'string',
          },
          lastName: {
            title: 'Last Name',
            type: 'string',
          },
          city: {
            title: 'City',
            filter: {
              type: 'list',
              config: {
                selectText: 'Show All',
               list: this.cityList,
              },
            },
            valuePrepareFunction: value => this.getCityById(value),
          },
          pK: {
              title: 'Lead Type',
              type: 'string',
              valuePrepareFunction: value => this.getLeadType(value),
          },
          email: {
              title: 'Email',
              type: 'string'
          },
          phone: {
              title: 'Phone',
              type: 'string'
          },
          leadStatus: {
            title: 'Lead Status',
            type: 'string',
            valuePrepareFunction: value => this.getLeadStatus(value),
          }
        }
    }
  }
    

  constructor(config: NgbCarouselConfig,
    private service: AdminAppService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal )
     {
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
     ;
    this.service.getAllRefCites().subscribe(res=>{
      res.forEach(element => {
        this.cityList.push({value: element.pK, title: element.city_name});
      });
     })

     this.service.getAllLeadStatus().subscribe(resp=>{
      this.leadStatusList = resp;
     })
   
  }
  ngOnInit() {
    //  this.spinnerService.hide();
    this.loading = true;
    this.route.params.subscribe((params: Params) => {
      this.sessionId = params['id'];
        this.service.getAllLeads(this.offset,this.limit).subscribe((data) => {
          this.leadList = data;
          this.settings = this.prepareSettings();
          this.source.load(data);
          this.loading = false;
          //  this.spinnerService.hide();
        });
    });
  }
  handleEdit(data: any) {
       ;
    const leadData = data.data;
        this.router.navigateByUrl('/admin-app/editLead/' + this.sessionId + '/' + leadData.pK);
  }
  handleCreate() {
    this.router.navigateByUrl('/admin-app/createLead/' + this.sessionId);
  }

  onDeleteConfirm(data: any): void {
     ;
    const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
              activeModal.componentInstance.showHide = true;
              activeModal.componentInstance.modalHeader = 'Alert';
              activeModal.componentInstance.modalContent = 'Are You Sure You Want To Delete?';
              activeModal.result.then ((res) => {
                if (res == 'Y') {
                  this.service.deleteLead(data.data.pK).subscribe(enquiry=>{
                    
                })
                const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
                activeModal.componentInstance.showHide = true;
                activeModal.componentInstance.modalHeader = 'Alert';
                activeModal.componentInstance.modalContent = 'Lead Successfully Deleted!';
                this.source.remove(data.data);
                // this.service.getAllLeads(this.offset, this.limit).subscribe(data=>{
                //   this.settings = this.prepareSettings();
                //   this.source.load(data);
                  
                // })
                
                } else if (res == 'N') {
                }
              });
            
  }

  getLeadType(value : any){
    let id = value;
    let status;
    this.leadList.forEach(item =>{
      if( item.pK == id) {
        if( item.istutor == true) {
          status = 'Tutor';
        } else if(item.isstudent == true){
          status = 'Student';
        }
      }
    })
    return status;
  }
  getLeadStatus(value: any) {
    let status;
    this.leadStatusList.forEach(item =>{
      if( item.pk == value) {
        status = item.currentStatus;
      }
    })
    return status;
  }
  
  getCityById( value: any ) {
    //  ;
    const len: number = this.cityList.length;
    for (let i = 0; i < len; i++) {
      if (this.cityList[i].value === value) {
        return this.cityList[i].title;
      }
    }
    return value;
  }


}
