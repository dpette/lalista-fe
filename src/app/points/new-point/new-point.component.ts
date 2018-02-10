import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { Person } from './../../people/person.model';
import { Word } from './../../words/word.model';
import { WordsService } from './../../words/words.service';
import { PeopleService } from './../../people.service';
import { PointsService } from './../points.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-new-point',
  templateUrl: './new-point.component.html',
  styleUrls: ['./new-point.component.scss']
})
export class NewPointComponent implements OnInit, OnDestroy {

  selectedPerson: Person;
  selectedWord: Word;

  people: Person[];
  words: Word[];

  peopleUpdated: Subscription;
  wordsUpdated: Subscription;

  constructor(
    private pointsService: PointsService,
    private peopleService: PeopleService,
    private wordsService: WordsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.people = this.peopleService.getPeople();
    this.words = this.wordsService.getWords();

    this.peopleUpdated = this.peopleService.peopleFetched.subscribe(
      (people: Person[]) => {
        this.people = people;
      }
    );

    this.wordsUpdated = this.wordsService.wordsFetched.subscribe(
      (words: Word[]) => {
        this.words = words;
      }
    );
  }

  onClickWord(i: number) {
    this.selectedWord = this.wordsService.getWord(i);
  }

  onClickPerson(i: number) {
    this.selectedPerson = this.peopleService.getPerson(i);
  }

  onSubmit() {
    this.pointsService.add(this.selectedPerson, this.selectedWord);
    this.router.navigate(['points']);
  }

  ngOnDestroy() {
    this.peopleUpdated.unsubscribe();
    this.wordsUpdated.unsubscribe();
  }

}
