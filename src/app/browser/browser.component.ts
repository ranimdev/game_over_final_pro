import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.scss']
})
export class BrowserComponent implements OnInit {

  // pc:any =[]
  // browser:any =[]

  constructor(private _apiServies:ApiService) { }

  ngOnInit(): void {

  //   this._apiServies.getGamesByPlatform(this.pc,this.browser).subscribe({
  //     next:(data) =>{
  //       this.browser = data.splice(0,20)
  //       console.log(data);
  //     }
  //   })
  }

}
