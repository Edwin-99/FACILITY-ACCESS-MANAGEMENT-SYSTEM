import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../auth/auth.service'
import  {User} from '../../user'
@Component({
  selector: 'admin-hostel-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
user:User
  constructor(private router:Router , private  authService:AuthService ) {

    this.authService.findMe().subscribe((user) =>
    {
       this.user = user ;
    })

   }

  ngOnInit(): void {
  }

}
