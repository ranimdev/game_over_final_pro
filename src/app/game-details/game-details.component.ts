import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})

export class GameDetailsComponent implements OnInit {
  @Input() game:any
  
  details:any = {}
  min_sys:any = {}
  constructor(private _apiService:ApiService , private _activatedRoute:ActivatedRoute) { 
    let {id} = this._activatedRoute.snapshot.params;
    // console.log(id);
    this.getGameDetails(id)
  }

  getGameDetails(id:string){
    this._apiService.getGameDetails(id).subscribe({
      next:(res) => {
        this.details = res;
       this.min_sys = res.minimum_system_requirements;
        console.log(res);
        
      }
    })
  }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 1
      }
    },
    nav: true
  }
}
