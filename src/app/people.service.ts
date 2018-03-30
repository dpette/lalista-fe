import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from './../environments/environment';
import { Rank, RankJSON } from './ranking/rank.model';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Person, PersonJSON } from './people/person.model';

@Injectable()
export class PeopleService {

  baseUrl = environment.apiUrl + 'people/';

  people: Person[] = [
  ];

  ranking: Rank[];

  peopleUpdated = new Subject<Person[]>();
  rankingUpdated = new Subject<Rank[]>();

  constructor(private http: HttpClient) {
  }

  getPerson(id: number): Observable<Person> {
    return this.http.get(this.baseUrl + id).map(
      (personJSON: PersonJSON) => {
        return Person.fromJSON(personJSON);
      }
    );
  }

  getPeople(archived: boolean = false): Person[] {
    const query = archived ? '?archived=true' : '';
    this.http.get(this.baseUrl + query).subscribe(
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

  archive(i) {
    this.http.put(this.baseUrl + this.people[i].id, {person: {archived: true}}).subscribe(
      (wordJSON: PersonJSON) => {
        this.people.splice(i, 1);
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

  declareWinner() {
    this.http.post(environment.apiUrl + 'winners', {}).subscribe(
      (winner: any) => {
         this.ranking.shift();
         this.rankingUpdated.next(this.ranking);
      }
    );
  }

}
