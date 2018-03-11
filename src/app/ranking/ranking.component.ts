import { Rank } from './rank.model';
import { PeopleService } from './../people.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  ranking: Rank[];

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.getRanking();

    this.peopleService.rankingUpdated.subscribe(
      (ranking: Rank[]) => {
        this.ranking = ranking;
      }
    );
  }

}
