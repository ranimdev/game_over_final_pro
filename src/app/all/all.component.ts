import { Details } from './../details';
import { Component,Input ,OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  allGames:any=[]
  count:number=1;

  constructor(private _apiServies:ApiService) { }

  ngOnInit(): void {

    this._apiServies.getAllGames().subscribe({
      next:(data) => {
        this.allGames = data;
        this.count;
        console.log(data);
      }
    })
  }

}
