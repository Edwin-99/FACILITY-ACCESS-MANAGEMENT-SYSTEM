import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'hostel-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'Facility Access Management System';
user:User
  constructor() {

    // this.authService.findMe().subscribe(user =>(this.user = user));
    //      if(this.user.role !==  'User'){
    //       window.location.replace('/admin')
    //      }
   }

  ngOnInit(): void {
  }

}
