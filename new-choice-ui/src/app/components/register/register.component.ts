import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/service/user.service';
import { User } from 'src/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regForm!: FormGroup;

  regData: User = {
    username:"",
    email: "",
    password: ""
  }

  constructor(private fb: FormBuilder, 
    private userservice: UserService,
    private router:Router) { }

  ngOnInit(): void {
    this.regForm = this.fb.group({
      username: ['',[Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.regForm.value);
    this.regData.username = this.regForm.value.username;
    this.regData.email = this.regForm.value.email;
    this.regData.password = this.regForm.value.password;

    this.userservice.addUser(this.regData).subscribe((userdata: any) => {
      this.router.navigate(['/', 'login']);
    })
  }
}
