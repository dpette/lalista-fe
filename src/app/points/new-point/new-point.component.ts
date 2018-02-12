import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

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
export class NewPointComponent implements OnInit, OnDestroy {

  selectedPerson: Person;
  selectedWord: Word;

  people: Person[];
  words: Word[];

  peopleSubscription: Subscription;
  wordsSubscription: Subscription;

  constructor(
    private pointsService: PointsService,
    private peopleService: PeopleService,
    private wordsService: WordsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.words = this.wordsService.getWords();
    this.people = this.peopleService.getPeople();

    this.peopleSubscription = this.peopleService.peopleUpdated.subscribe(
      (people: Person[]) => {
        this.people = people;
      }
    );
    this.wordsSubscription = this.wordsService.wordsUpdated.subscribe(
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
  }

  onSubmit() {
    this.pointsService.add(this.selectedPerson, this.selectedWord);
    this.router.navigate(['points']);
  }

  ngOnDestroy() {
    this.peopleSubscription.unsubscribe();
    this.wordsSubscription.unsubscribe();
  }
}
