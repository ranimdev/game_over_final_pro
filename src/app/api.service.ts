import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  
  BASEURL:string = 'https://free-to-play-games-database.p.rapidapi.com/api/games';

  headers =  {
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    'X-RapidAPI-Key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68'
  };
  
  constructor(private _httpClient:HttpClient ) { }

  getAllGames():Observable<any>  {
    return this._httpClient.get(`${this.BASEURL}`,{
      headers:this.headers,
    })
  }

  
  getGamesByPlatform(platform:any):Observable<any>{
    return this._httpClient.get(`${this.BASEURL}`, {
      headers:this.headers,
      params : {
        platform: platform
      }
    })
  }


  getGamesBySortBy(sort_by:any):Observable<any>{
    return this._httpClient.get(`${this.BASEURL}`,{
      headers:this.headers,
      params : {
        "sort-by" : sort_by
      }
    })
  }


  getGamesByCategory(category:any):Observable<any>{
    return this._httpClient.get(`${this.BASEURL}`,{
      headers:this.headers,
      params : {
        category: category
      }
    })
  }

  
  getGameDetails(id:string):Observable<any>{
    return this._httpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,{
      headers:this.headers    
    })
  }

} 


// getGamesByPlatform(PC:any):Observable<any> {
  //   return this._httpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`, {
  //     headers:this.headers,
  //     params: new HttpParams().append(
  //       "platform",`${PC}`
  //     ) 
  //   })
  // }  



  // getGamesBySortBy(sort_by:any):Observable<any>{
  //   return this._httpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`,{
  //     headers:this.headers,
  //     params: new HttpParams().append(
  //       "sort-by",`${sort_by}`
  //     ) 
  //   })
  // }
  


  // getGamesByCategory(category:any){
  //   return this._httpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`,{
  //     headers:this.headers,
  //     params: new HttpParams().append(
  //       "category",`${category}`
  //     ) 
  //   })
  // }







