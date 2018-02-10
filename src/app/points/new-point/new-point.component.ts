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
export class NewPointComponent implements OnInit {

  selectedPerson: Person;
  selectedWord: Word;

  people: Person[];
  words: Word[];

  constructor(
    private pointsService: PointsService,
    private peopleService: PeopleService,
    private wordsService: WordsService,
    private router: Router
  ) { }

  ngOnInit() {
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

}
