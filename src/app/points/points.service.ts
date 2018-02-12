import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Point } from './point.model';
import { Word } from './../words/word.model';
import { Person } from './../people/person.model';

@Injectable()
export class PointsService {

  baseUrl = 'http://localhost:3000/points/';

  points = [];

  pointsUpdated = new Subject<Point[]>();

  constructor(private http: HttpClient) {
  }

  getPoints() {
    this.http.get(this.baseUrl).subscribe(
      (points: Point[]) => {
        this.points = points;
        this.pointsUpdated.next(this.points);
      }
    );

    return this.points;
  }

  add(person: Person, word: Word) {
    this.http.post(this.baseUrl, { person_id: person.id, word_id: word.id })
    .subscribe(
      (addedPoint: Point) => {
        this.points = [addedPoint, ...this.points];
        this.pointsUpdated.next(this.points);
      }
    );
  }

  delete(i) {
    this.http.delete(this.baseUrl + this.points[i].id).subscribe(
      (removedPoint: Point) => {
        this.points.splice(i, 1);
        this.pointsUpdated.next(this.points);
      }
    );
  }

}
