import { NavService } from './../nav/nav.service';
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

  constructor(
    private peopleService: PeopleService,
    private navService: NavService,
    private coverImagesService: CoverImagesService) { }

  ngOnInit() {
    this.peopleService.getRanking();

    this.navService.setTitle('LALISTA');
    this.navService.setBasicLevel();

    this.peopleService.rankingUpdated.subscribe(
      (ranking: Rank[]) => {
        this.ranking = ranking;
      }
    );

    this.coverImagesService.getActiveCoverImage();
    this.coverImagesService.activeCoverImageUpdated.subscribe(
      (activeCoverImage: CoverImage) => {
        if (activeCoverImage && activeCoverImage.url) {
          this.coverImageUrl = activeCoverImage.url;
        }
        this.coverImageFetched = true;
      }
    );
  }

  onNewImage() {
    this.coverImageFormActive = !this.coverImageFormActive;
  }

  onCreateImage(url: HTMLInputElement) {
    this.coverImageFormActive = false;
    this.coverImagesService.createCoverImage(url.value);
  }

}
