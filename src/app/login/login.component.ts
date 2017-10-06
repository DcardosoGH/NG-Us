import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMsg: string;
  email:string;
  password:string;

  constructor(private authSerive:AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  signIn(){
    this.authSerive.login({email: this.email, password: this.password})
      .then(resolve => this.router.navigate(['gallery']))
      .catch(error => this.errorMsg = error.message);
  }

}
