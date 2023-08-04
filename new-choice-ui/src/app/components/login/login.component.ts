import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserService } from 'src/service/user.service';
import { User } from 'src/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  loginData: User = {
    username:"",
    email: "",
    password: ""
  }

  constructor(private fb: FormBuilder,
    private userservice: UserService,
    private router:Router){}

  ngOnInit(): void {
    this.loginForm= this.fb.group ({
      username: ['',[Validators.required, Validators.minLength(2)]],
      email: ['',[Validators.required, Validators.minLength(2)]],
      password: ['',Validators.required]
    });
  }

  onSubmit(){
alert('Login success!!')
    console.log(this.loginForm.value);
    this.loginData.username = this.loginForm.value.username;
    this.loginData.email = this.loginForm.value.email;
    this.loginData.password = this.loginForm.value.password;

    this.userservice.addUserLogin(this.loginData).subscribe((userdata: any) => {
      this.router.navigate(['/', 'home']);
    })
  }
}
