import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { AdminAppService } from '../admin-app.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModalComponent } from 'app/shared/common-modal/common-modal.component';

@Component({
    selector: 'admin-app-userManagement',
    templateUrl: './userManagement.html',
    styleUrls: ['./userManagement.scss'],
    providers: [NgbCarouselConfig],
})

export class UserComponent implements OnInit {

  userList: any[] = [];   
  userStatusList: any[] = [];
  userRoleList: any[] = [];
  cities: any[] = [];
  cityList: any[] = [];
  offset: any = -1;
  limit: any = -1;
  source: LocalDataSource = new LocalDataSource();
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
        userName: {
          title: 'User Name',
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
        email: {
            title: 'Email',
            type: 'string'
        },
        phone: {
            title: 'Phone',
            type: 'string'
        },
        user_role: {
          title: 'User Role',
          type: 'string',
          valuePrepareFunction: value => this.getUserRole(value),
        },
        user_status: {
          title: 'User Status',
          type: 'string',
          valuePrepareFunction: value => this.getUserStatus(value),
        }
      }
    };
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
   // this.service.
   this.service.getAllRefCites().subscribe(res=>{
    res.forEach(element => {
      this.cityList.push({value: element.pK, title: element.city_name});
    });
  })
  this.service.getAllUserStatus().subscribe(data=>{
    this.userStatusList = data;
  });
  this.service.getAllUserRoles().subscribe(data=>{
    this.userRoleList = data;
  })
 
  }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.sessionId = params['id'];
    });
    this.loading = true;
    this.service.getAllUsers(this.offset, this.limit).subscribe((data) => {    
      this.userList = data;
      this.settings = this.prepareSettings();
      this.source.load(data);
      this.loading = false;
   });
  }
  handleEdit(data: any) {
      debugger;
    const leadData = data.data;
        this.router.navigateByUrl('/admin-app/editUserManagement/' +this.sessionId + '/' + leadData.pK);
  }
  handleCreate() {
    this.router.navigateByUrl('/admin-app/createUserManagement/' +this.sessionId );
  }

  onDeleteConfirm(data: any): void {
    debugger;
    const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
              activeModal.componentInstance.showHide = true;
              activeModal.componentInstance.modalHeader = 'Alert';
              activeModal.componentInstance.modalContent = 'Are You Sure You Want To Delete?';
              activeModal.result.then ((res) => {
                if (res == 'Y') {
                  this.service.deleteUser(data.data.pK).subscribe(enquiry=>{
                    
                })
                const activeModal = this.modalService.open(CommonModalComponent, { size: 'lg' });
                activeModal.componentInstance.showHide = true;
                activeModal.componentInstance.modalHeader = 'Alert';
                activeModal.componentInstance.modalContent = 'User Successfully Deleted!';
                this.source.remove(data.data);
              //  this.service.getAllUsers(this.offset, this.limit).subscribe(res =>{
              //    this.settings = this.prepareSettings();
              //    this.source.load(res);
              //  })
                
                } else if (res == 'N') {
                }
              });
  }

  getUserStatus(value: any){
    debugger;
   let status;
   this.userStatusList.forEach(item =>{
     if (item.pk == value ){
      status = item.user_status;
     }
   })
   return status;
  }

  getUserRole(value: any){
    debugger;
   let status;
   this.userRoleList.forEach(item =>{
     if (item.pk == value ){
      status = item.role_name;
     }
   })
   return status;
  }

  getCityById( value: any ) {
    // debugger;
    const len: number = this.cityList.length;
    for (let i = 0; i < len; i++) {
      if (this.cityList[i].value === value) {
        return this.cityList[i].title;
      }
    }
    return value;
  }

}
