import { Game } from './../game';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { __param } from 'tslib';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.scss']
})
export class PlatformsComponent implements OnInit {
  
  count:number=1;
  platform:any=[];
  
  constructor(private _activatedRoute:ActivatedRoute ,private _apiServies:ApiService) {
    // let platform=this._activatedRoute.snapshot.params['platforms'];
    //    this.getGamesByPlatform(platform);
    this._activatedRoute.paramMap.subscribe(
      params => {
        this.getGamesByPlatform(params.get('platform'))
      } 
    );
  }

  getGamesByPlatform(platform:any){
    this._apiServies.getGamesByPlatform(platform).subscribe({
      next:(data) => {
        this.platform = data;
        console.log(this.platform);
      }
    })
  }
  
  ngOnInit(): void {
  }

}
