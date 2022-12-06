import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component , Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  // @Input() game:any

  allGames:any=[]
  constructor(private _apiServies:ApiService ) { }

  ngOnInit(): void {

    this._apiServies.getAllGames().subscribe({
      next:(data) => {
        // this._apiServies.getAllGames()
        // this.allGames = data.results.splice(0,10)
        this.allGames = data.splice(0,3);
        console.log(data);
      }
    })
    // this._apiServies.getAllGames().
  }



  
}
