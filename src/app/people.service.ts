import { Rank, RankJSON } from './ranking/rank.model';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Person, PersonJSON } from './people/person.model';

@Injectable()
export class PeopleService {

  baseUrl = 'http://localhost:3000/people/';

  people: Person[] = [
  ];

  ranking: Rank[];

  peopleUpdated = new Subject<Person[]>();
  rankingUpdated = new Subject<Rank[]>();

  constructor(private http: HttpClient) {
  }

  getPeople(): Person[] {
    this.http.get(this.baseUrl).subscribe(
      (people: PersonJSON[]) => {
        this.people = people.map((personJSON: PersonJSON) => {
          return Person.fromJSON(personJSON);
        });
        this.peopleUpdated.next(this.people);
      }
    );

    return this.people;
  }

  add(person) {
    this.http.post(this.baseUrl, {person: person}).subscribe(
      (personJSON: PersonJSON) => {
        this.people = [
          Person.fromJSON(personJSON),
          ...this.people
        ];
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
      (ranking: RankJSON[]) => {
        this.ranking = ranking.map((rankJSON: RankJSON) => {
          return Rank.fromJSON(rankJSON);
        });
        this.rankingUpdated.next(this.ranking);
      }
    );

    return this.ranking;
  }

}
