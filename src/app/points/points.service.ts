import { ToastrService } from 'ngx-toastr';
import { environment } from './../../environments/environment';
import { PeopleService } from './../people.service';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Point, PointJSON } from './point.model';
import { Word } from './../words/word.model';
import { Person } from './../people/person.model';

@Injectable()
export class PointsService {

  baseUrl = environment.apiUrl + 'points/';

  points = [];

  pointsUpdated = new Subject<Point[]> ();

  constructor(
    private http: HttpClient,
    private peopleService: PeopleService,
    private toastrService: ToastrService
  ) {
  }

  getPoints() {
    this.http.get(this.baseUrl).subscribe(
      (pointsJSON: PointJSON[]) => {
        this.points = pointsJSON.map((pointJSON: PointJSON) => {
          return Point.fromJSON(pointJSON);
        });
        this.pointsUpdated.next(this.points);
      }
    );

    return this.points;
  }

  add(person: Person, word: Word) {
    person.incrementPoints();
    this.toastrService.success('Segnato \'' + word.name + '\' a ' + person.name + '!');

    this.http.post(this.baseUrl, { point: { word_id: word.id, person_id: person.id }}).subscribe(
      (pointJSON: PointJSON) => {
        this.points = [
          Point.fromJSON(pointJSON),
          ...this.points
        ];
        this.pointsUpdated.next(this.points);
        this.peopleService.getRanking();
      }
    );

  }

  delete(i) {
    const point = this.points[i];
    this.toastrService.success('Come non detto,  ' + point.person.name + ' non ha detto \'' + point.word.name + '\'!');
    this.points.splice(i, 1);

    this.http.delete(this.baseUrl + '/' + point.id).subscribe(
      (pointJSON: PointJSON) => {
      }
    );
  }

}
