import { Person } from './../people/person.model';
import { Subscription } from 'rxjs/Subscription';
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

  rankingFetched: Subscription;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.ranking = this.peopleService.getRanking();

    this.rankingFetched = this.peopleService.rankingFetched.subscribe(
      (ranking: Rank[]) => {
        this.ranking = ranking;
      }
    );
  }

}
