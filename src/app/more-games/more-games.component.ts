import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-games',
  templateUrl: './more-games.component.html',
  styleUrls: ['./more-games.component.scss']
})
export class MoreGamesComponent implements OnInit {
  
  count:number=1;
  @Input () allGames:any

  constructor() { }

  ngOnInit(): void {
  }

}
