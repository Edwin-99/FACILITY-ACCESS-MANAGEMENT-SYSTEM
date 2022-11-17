import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'pm-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any[];

  constructor(private adminService: AdminService) {
    this.adminService.getAllUsers().subscribe((users) => { this.users = users; });
  }

  ngOnInit(): void {
  }


  deleteUser(_id:string , name:string){
         
    console.log(_id) ; 

 if(confirm(`Are you sure you want to delete  user ${name}`)){
    this.adminService.deleteUser(_id).subscribe(s=>{
      alert(s) 

      window.location.reload();
    })

   }
  }

  makePorter(_id:string , name:string){

    console.log(_id) ; 

   if(confirm(`Are you sure you want to make ${name}  a porter`)){
    this.adminService.addPorter(_id).subscribe(s=>{
      alert(s) 

      window.location.reload();
    })

   }


  }
}
