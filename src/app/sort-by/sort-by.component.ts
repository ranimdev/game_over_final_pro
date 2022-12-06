import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.scss']
})
export class SortByComponent implements OnInit {
  count:number=1;

  sort_by:any= [];
  constructor(private _activatedRoute:ActivatedRoute ,private _apiServies:ApiService) { 
    this._activatedRoute.paramMap.subscribe(
      params => {
        this.getGamesBySortBy(params.get('sort_by'))        
      }
    )
  }

  getGamesBySortBy(sort_by:any){
    this._apiServies.getGamesBySortBy(sort_by).subscribe({
      next:(data) => {
        this.sort_by = data;
        console.log(this.sort_by);
      }
    })
  }
  

  ngOnInit(): void {
  }

}
