import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  count:number=1;

  categories:any = [];
  constructor(private _apiService:ApiService , private _activatedRoute:ActivatedRoute) { 
    this._activatedRoute.paramMap.subscribe(
      param => {
        this.getGamesByCategory(param.get('categories'))
      }
    )
  }

  ngOnInit(): void {
  }

  getGamesByCategory(categories:any){
    this._apiService.getGamesByCategory(categories).subscribe({
      next:(data) => {
        this.categories = data;
        console.log(this.categories);
        
      }
    })
  }

}
