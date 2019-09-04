import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });

  message="";

  constructor(private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem("loginKey")==="admin" || localStorage.getItem("loginKey")==="userABC"){
      this.router.navigate(['/dashboard']);
    }
    else{
      localStorage.setItem("loginKey","none");
    }
  }

  onSubmit() {
    if(this.login.value.userName=="admin" && this.login.value.password=="1234"){
      localStorage.setItem("loginKey","admin");
      this.router.navigate(['/dashboard']);
    }
    else if(this.login.value.userName=="userABC" && this.login.value.password=="1234"){
      localStorage.setItem("loginKey","userABC");
      this.router.navigate(['/dashboard']);
    }
    else{
      this.message = "Incorrect credentials";
    }
  }
  
  recheck(){
    this.message="";
  }

}
