import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  errorFromSignUp: string = '';
  isLoading:boolean = false ;

  registerForm:FormGroup = new FormGroup({
    first_name: new FormControl(null,[Validators.required ,Validators.pattern(/^./)]),
    last_name: new FormControl(null,[Validators.required , Validators.minLength(3) , Validators.maxLength(10)]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    age: new FormControl(null,[Validators.required , Validators.min(15) , Validators.max(30)]),
    password: new FormControl(null,[Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
  
  })
  constructor(private _authService:AuthService , private _router:Router) { }

  ngOnInit(): void {
  }

  registerUser(registerForm:FormGroup){

    // console.log("hi",registerForm);
    if(registerForm.valid){
      this.isLoading = true
      this._authService.signUp(registerForm.value).subscribe({
        next:(data:any) => {
          if(data.message == "success"){
            this.isLoading = false
            this._router.navigate(['/login'])
          }
          else{
            this.errorFromSignUp = data.message
          }
        }
      })
    }
    
  }
}
