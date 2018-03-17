import { CoverImage } from './../cover-images/cover-image.model';
import { CoverImagesService } from './../cover-images/cover-images.service';
import { Rank } from './rank.model';
import { PeopleService } from './../people.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  firstRankOpened = false;
  ranking: Rank[];
  coverImageFormActive = false;
  coverImageUrl: string = null;
  coverImageFetched = false;

  constructor(private peopleService: PeopleService, private coverImagesService: CoverImagesService) { }

  ngOnInit() {
    this.peopleService.getRanking();

    this.peopleService.rankingUpdated.subscribe(
      (ranking: Rank[]) => {
        this.ranking = ranking;
      }
    );

    this.coverImagesService.getActiveCoverImage();
    this.coverImagesService.activeCoverImageUpdated.subscribe(
      (activeCoverImage: CoverImage) => {
        if (activeCoverImage.url) {
          this.coverImageUrl = activeCoverImage.url;
          this.coverImageFetched = true;
        }
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

  onNewImage() {
    this.coverImageFormActive = !this.coverImageFormActive;
  }

  onCreateImage(url: string) {
    this.coverImageFormActive = false;
    this.coverImagesService.createCoverImage(url.value);
  }

}
