import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'pm-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  currentUsername: string;
  currentPassword: string;
  error: string;

  user: User;

  constructor(private router: Router, private authService: AuthService) 
  { 
    this.authService.findMe().subscribe(user =>(this.user = user));
  }

  ngOnInit(): void {
  }

  signin() {
    this.error = '';
    this.authService
      .login(this.currentUsername, this.currentPassword)
      .subscribe(s => {
        console.log(s)
        if(s.role === 'User'){

        return this.router.navigate(['']) ;
        }
        return this.router.navigate(['/admin']);
      }, err => this.error = err);
  }

  redirectToHome() {
    if(this.user.role ===  'User'){
      this.router.navigate(['/dashboard']);
    }
         
    this.router.navigate(['/admin']);
    // navigate to dashboard page
  }
    
  get  User(){

    return this.user

  }
}
