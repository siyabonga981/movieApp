import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;
  user = {
    email: '',
    password: ''
  };

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    // this.api.getData('users/{"email":"firstName", "password":"firstName"}')
    let searchWith = {"email":"firstName", "password":"firstName"};
    this.api.genericGet(`users`, searchWith).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  submit(form): any {
    this.submitted = true;
    console.log(form);
  }
}
