import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogin:boolean = false
  constructor(private _authService:AuthService) { 
    this._authService.userData.subscribe({
      next:(data: any)=>{
        console.log(data,"hello");
        if(this._authService.userData.getValue()){
          this.isLogin = true
        } else {
          this.isLogin = false
        }
      }
    })
  }

  ngOnInit(): void {
  }

  logOut(){
    this._authService.logOut()
  }

}
