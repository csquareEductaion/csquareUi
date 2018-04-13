import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AdminAppService } from '../../admin-app.service';

@Component({
  selector: 'app-student-logged-in',
  templateUrl: './student-logged-in.component.html',
  styleUrls: ['./student-logged-in.component.scss']
})
export class StudentLoggedInComponent implements OnInit {

  sessionId: any;
  studentIdParam: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: AdminAppService
  ) {
    this.route.params.subscribe((params: Params) =>{
      this.studentIdParam = params['pk'];
      this.sessionId = params['id'];

      this.service.getStudentById(this.studentIdParam).subscribe(data =>{
        
      });
    })
   }

  ngOnInit() {
  }

}
