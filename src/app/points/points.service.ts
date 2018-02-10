import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Point } from './point.model';
import { Word } from './../words/word.model';
import { Person } from './../people/person.model';

@Injectable()
export class PointsService {

  points = [];

  baseUrl = 'http://localhost:3000/points';

  pointsUpdated = new Subject<Point[]> ();

  constructor(private http: HttpClient) {
  }

  getPoints() {

    this.http.get(this.baseUrl).subscribe(
      (points: Point[]) => {
        this.points = points;
        this.pointsUpdated.next(points);
      }
    );
    return this.points;
  }

  add(person: Person, word: Word) {
    this.http.post(this.baseUrl, {
      point: { word_id: word.id, person_id: person.id }
    }).subscribe(
      (point: Point) => {
        this.points.push(point);
      }
    );
  }

  delete(i) {
    const point = this.points[i];

    this.http.delete(this.baseUrl + '/' + point.id).subscribe(
      (deletedPoint: Point) => {
        this.points.splice(i, 1);
      }
    );
  }

}
