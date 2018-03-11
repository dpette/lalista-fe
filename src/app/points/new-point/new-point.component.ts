import { Router, ActivatedRoute } from '@angular/router';

import { Person } from './../../people/person.model';
import { Word } from './../../words/word.model';
import { WordsService } from './../../words/words.service';
import { PeopleService } from './../../people.service';
import { PointsService } from './../points.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-point',
  templateUrl: './new-point.component.html',
  styleUrls: ['./new-point.component.scss']
})
export class NewPointComponent implements OnInit {

  selectedPerson: Person;
  selectedWord: Word;

  people: Person[];
  words: Word[];

  constructor(
    private pointsService: PointsService,
    private peopleService: PeopleService,
    private wordsService: WordsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.words = this.wordsService.getWords();
    this.people = this.peopleService.getPeople();

    this.peopleService.peopleUpdated.subscribe(
      (people: Person[]) => {
        this.people = people;
      }
    );
    this.wordsService.wordsUpdated.subscribe(
      (words: Word[]) => {
        this.words = words;
      }
    );

  }

  onClickWord(i: number) {
    this.selectedWord = this.words[i];
  }

  onClickPerson(i: number) {
    this.selectedPerson = this.people[i];
    // const element = document.querySelector('#words-selector-list');
    // if (element) {
    //   element.scrollIntoView(<any>element);
    // }
  }

  onSubmit() {
    this.pointsService.add(this.selectedPerson, this.selectedWord);
    this.router.navigate(['.']);
  }

}
