import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  errorFromLogin: string = '';
  isLoading :boolean= false;
  loginForm:FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
  })

  constructor(private _authService:AuthService , private _router:Router) { }

  ngOnInit(): void {
  }

  loginUser(loginForm:FormGroup){
    console.log("hi",loginForm);
    if(loginForm.valid){
      this.isLoading = true
      this._authService.signIn(loginForm.value).subscribe({
        next:(data:any) => {
          if(data.message == "success"){
            localStorage.setItem("token" , data.token)
            this.isLoading = false
            this._authService.savedUser()
            this._router.navigate(['/home'])
          } else {
            this.errorFromLogin = data.message
          }
        }
      })
    }
    
    
  }
}
