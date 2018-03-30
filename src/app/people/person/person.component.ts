import { PeopleService } from './../../people.service';
import { PointsService } from './../../points/points.service';
import { Word } from './../../words/word.model';
import { WordsService } from './../../words/words.service';
import { NavService } from './../../nav/nav.service';
import { Person } from './../person.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  person: Person;
  words: Word[];
  selectedWord: Word;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navService: NavService,
    private wordsService: WordsService,
    private peopleService: PeopleService,
    private pointsService: PointsService
  ) { }

  ngOnInit() {
    this.navService.setSecondaryLevel();

    this.route.data.subscribe(
      (data) => {
        this.person = data.person;
        this.navService.setTitle(this.person.name);
      }
    );

    this.words = this.wordsService.getWords();
    this.wordsService.wordsUpdated.subscribe(
      (words: Word[]) => {
        this.words = words;
      }
    );
  }

  onClickWord(i) {
    this.selectedWord = this.words[i];
  }

  onAddPoint() {
    this.pointsService.add(this.person, this.selectedWord);
    window.history.back();
  }

  onDeclareWinner() {
    this.peopleService.declareWinner();
    this.peopleService.getRanking();
    window.history.back();
  }

}
