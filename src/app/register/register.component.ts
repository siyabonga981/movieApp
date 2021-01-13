import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [ApiService]
})
export class RegisterComponent implements OnInit {
  submitted = false;
  user = {
    firstName: 'siya',
    lastName: 'hlongwane',
    email: 'abc@gmsil.com',
    password: '1234',
    passwordConfirm: '1234'
  };
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.updateUser();
  }

  register(form): any {
    this.submitted = true;
    console.log(form);
    this.api.genericPost('users', this.user).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  updateUser(): any {
    this.api.updatePost('users/5ffdc2d4b2731bf5ece0728e', this.user).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  deleteUser() {
    this.api.deletePost('users/5ffdc2d4b2731bf5ece0728e', this.user).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }
}
