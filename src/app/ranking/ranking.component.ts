import { Subscription } from 'rxjs/Subscription';
import { Rank } from './rank.model';
import { PeopleService } from './../people.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit, OnDestroy {

  ranking: Rank[];
  rankingSubscription: Subscription;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.ranking = this.peopleService.getRanking();

    this.rankingSubscription = this.peopleService
      .rankingUpdated.subscribe(
        (ranking: Rank[]) => {
          console.log('aggiornaaa!');
          this.ranking = ranking;
        }
      );
  }

  ngOnDestroy() {
    this.rankingSubscription.unsubscribe();
  }

}
