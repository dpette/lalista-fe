import { Injectable } from '@angular/core';

import { Point } from './point.model';
import { Word } from './../words/word.model';
import { Person } from './../people/person.model';

@Injectable()
export class PointsService {

  points = [];

  constructor() {
  }

  getPoints() {
    return this.points;
  }

  add(person: Person, word: Word) {
    this.points.push(new Point(person, word));
  }

  delete(i) {
    this.points.splice(i, 1);
  }

}
