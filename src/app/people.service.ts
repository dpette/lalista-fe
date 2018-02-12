import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Person } from './people/person.model';

@Injectable()
export class PeopleService {

  people: Person[] = [
    new Person('Antonio'),
    new Person('Filippo')
  ];

  constructor() {
  }

  getPeople(): Person[] {
    return this.people;
  }

  add(person) {
    this.people.push(person);
  }

  delete(i) {
    this.people.splice(i, 1);
  }

}
