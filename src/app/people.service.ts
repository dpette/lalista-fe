import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Person } from './people/person.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PeopleService {

  baseUrl = 'http://localhost:3000/people';

  peopleUpdated = new Subject<Person[]>();

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
        this.peopleUpdated.next(this.people);
      }
    );
    return this.people;
  }

  add(person) {
    this.http.post(this.baseUrl, {person: person}).subscribe(
      (addedPerson: Person) => {
        this.people.push(addedPerson);
        this.peopleUpdated.next(this.people);
      }
    );
  }

  delete(i) {
    const person = this.people[i];

    this.http.delete(this.baseUrl + '/' + person.id).subscribe(
      (deletedPerson: Person) => {
        this.people.splice(i, 1);
        this.peopleUpdated.next(this.people);
      }
    );
  }

}
