import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Person } from './people/person.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PeopleService {

  baseUrl = 'http://localhost:3000/people';

  peopleFetched = new Subject<Person[]>();

  people: Person[] = [
    // new Person('Antonio'),
    // new Person('Filippo')
  ];

  constructor(private http: HttpClient) {
  }

  getPeople(): Person[] {
    this.fetchPeople();
    return this.people;
  }

  getPerson(i: number): Person {
    return this.people[i];
  }

  add(person) {
    this.http.post(this.baseUrl, person).subscribe(
      (deletedPerson) => {
        this.people.push(person);
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

  private fetchPeople() {
    this.http.get(this.baseUrl).subscribe(
      (people: Person[]) => {
        this.people = people;
        this.peopleFetched.next(this.people);
      }
    );
  }

}
