import { Rank } from './ranking/rank.model';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Person } from './people/person.model';

@Injectable()
export class PeopleService {

  baseUrl = 'http://localhost:3000/people/';

  people: Person[] = [
  ];

  peopleUpdated = new Subject<Person[]>();

  ranking: Rank[];
  rankingUpdated = new Subject<Rank[]>();

  constructor(private http: HttpClient) {
  }

  getPeople(): Person[] {
    this.http.get(this.baseUrl).subscribe(
      (people: Person[]) => {
        this.people = people;
        this.peopleUpdated.next(this.people);
      }
    );

    return this.people;
  }

  add(person) {
    this.http.post(this.baseUrl, {person: person}).subscribe(
      (addedPerson: Person) => {
        this.people = [addedPerson, ...this.people];
        this.peopleUpdated.next(this.people);
      }
    );
  }

  delete(i) {
    this.http.delete(this.baseUrl + this.people[i].id).subscribe(
      (deletedPerson: Person) => {
        this.people.splice(i, 1);
        this.peopleUpdated.next(this.people);
      }
    );
  }

  getRanking() {
    this.http.get(this.baseUrl + 'ranking').subscribe(
      (ranking: Rank[]) => {
        this.ranking = ranking;
        this.rankingUpdated.next(this.ranking);
      }
    );

    return this.ranking;
  }

}
