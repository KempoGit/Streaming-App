import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.verifyLogin();
  }

  verifyLogin() {
    this.auth.isAuthenticated$.subscribe((res) => {
      if(res) {
        this.router.navigate(['home']);
      }
    });
  }

  loginWithRedirect() {
    this.auth.loginWithRedirect();
  }

}

