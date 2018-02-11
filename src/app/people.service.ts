import { Rank } from './ranking/rank.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Person } from './people/person.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PeopleService {

  baseUrl = 'http://localhost:3000/people';

  peopleFetched = new Subject<Person[]>();
  rankingFetched = new Subject<Rank[]>();

  ranking = [];

  people: Person[] = [
    // new Person('Antonio'),
    // new Person('Filippo')
  ];

  constructor(private http: HttpClient) {
  }

  getPeople(): Person[] {
    this.http.get(this.baseUrl).subscribe(
      (people: Person[]) => {
        this.people = people;
        this.peopleFetched.next(this.people);
      }
    );
    return this.people;
  }

  add(person) {
    this.http.post(this.baseUrl, {person: person}).subscribe(
      (addedPerson: Person) => {
        this.people = [addedPerson, ...this.people];
        this.peopleFetched.next(this.people);
      }
    );
  }

  delete(i) {
    const person = this.people[i];

    this.http.delete(this.baseUrl + '/' + person.id).subscribe(
      (deletedPerson: Person) => {
        this.people.splice(i, 1);
      }
    );
  }

  getRanking() {
    this.http.get(this.baseUrl + '/ranking').subscribe(
      (fetchedRanking: Rank[]) => {
        this.ranking = fetchedRanking;
        this.rankingFetched.next(this.ranking);
      }
    );

    return this.ranking;
  }

  private fetchPeople() {
  }

}
