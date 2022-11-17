import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student , Room , member } from 'src/app/student';
import { ViewAllStudentService } from './view-all-student.service';
import {AdminService} from '../admin.service'
import  {User} from '../../user'
import  {AuthService} from '../../auth/auth.service';
@Component({
  selector: 'view-all-student',
  templateUrl: './view-all-student.component.html',
  styleUrls: ['./view-all-student.component.css',
    '../student-add/student-add.component.css'
  ]
})



export class ViewAllStudentComponent implements OnInit {
users:User; 
  students:Room[] = [];
  msg: string;
key:boolean;
  maleStudents: Student[] = [];
  superDeluxeRoomsMaleStudents: Student[] = [];
  deluxeRoomsMaleStudents: Student[] = [];
  standardRoomsMaleStudents: Student[] = [];

  femaleStudents: Student[] = [];
  superDeluxeRoomsFemaleStudents: Student[] = [];
  deluxeRoomsFemaleStudents: Student[] = [];
  standardRoomsFemaleStudents: Student[] = [];

  searchRooms: Room[] = [];
  members:member[] = [];
  members2:string[] =[];
  searchIsDone: boolean = false;
  searchmsg: string = "No Student Found!!";

  rNoForSearch = new FormGroup({
    rNo: new FormControl('',[Validators.required])
  });

  constructor(private viewAllStudentService: ViewAllStudentService, private router: Router , private adminService:AdminService , private authService:AuthService)  
  {
    

    this.authService.findMe().subscribe((user)=>this.users =  user);
    this.viewAllStudentService.findRoom()
    .subscribe((rooms) => {
        this.students =  rooms.map((room:any)=>{
                 return {
                   number:room.number   , 
                   members:room.members ,
                   key:room.key
                 }
        });

        console.log(this.students)
        // this.students.sort((a, b) => (a.roomNo > b.roomNo) ? 1 : -1);
        // this.students = this.students.filter(a=> a.isStatus !== false);
        
        // this.femaleStudents = this.students.filter(a=> a.gender == "female");
        // this.superDeluxeRoomsFemaleStudents = this.femaleStudents.filter(a => a.roomCategory == "Super Deluxe");
        // this.deluxeRoomsFemaleStudents = this.femaleStudents.filter(a => a.roomCategory == "Deluxe");
        // this.standardRoomsFemaleStudents = this.femaleStudents.filter(a => a.roomCategory == "Standard");

        // this.maleStudents = this.students.filter(a=> a.gender == "male");
        // this.superDeluxeRoomsMaleStudents = this.maleStudents.filter(a => a.roomCategory == "Super Deluxe");
        // this.deluxeRoomsMaleStudents = this.maleStudents.filter(a => a.roomCategory == "Deluxe");
        // this.standardRoomsMaleStudents = this.maleStudents.filter(a => a.roomCategory == "Standard");

        // this.msg = 'There is not a single student';
      }
    );
  }

  ngOnInit(): void {
  }

  searchRoomNo() 
  {
    this.searchIsDone = false;
    if(!this.rNoForSearch.valid) {
      alert('please enter roomNo');
      return;
    }
    const roomNoDetails = this.rNoForSearch.getRawValue();
    console.log(roomNoDetails)
    this.searchRooms = this.students.filter(room => roomNoDetails.rNo === +room.number);
    this.members =  this.searchRooms[0]? this.searchRooms[0].members : [];
    this.key = this.searchRooms[0].key || false;
    console.log(this.members);
       this.members2  = this.members.map(member=>{
      return `${member.name}  ${member.indexNumber}`
    })
  console.log(this.searchRooms)
    this.searchIsDone = true;
  }

  get rNo() {
    return this.rNoForSearch.get('rNo');
  }


  removeStudent(_id:string){
    const number = this.rNoForSearch.getRawValue().rNo;
   if(confirm(`Are you sure you want to remove student from  room  ${number}`)){
    console.log(_id)
   
      console.log(number)

    this.adminService.removeStudentw(_id , number).subscribe(s=>{

      alert(s) 
        window.location.reload();
    })

   }
    

  }

}
