import { Rank } from './rank.model';
import { PeopleService } from './../people.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  firstRankOpened = false;
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

  onClickRank(i) {
    if (i === 0) {
      this.firstRankOpened = !this.firstRankOpened;
    }
  }

  onDeclareWinner() {
    this.peopleService.declareWinner();
  }

}
