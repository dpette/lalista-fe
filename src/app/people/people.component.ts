import { Person } from './person.model';
import { PeopleService } from './../people.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people: Person [];

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.people = this.peopleService.getPeople();
  }

  onSubmit(name: HTMLInputElement) {
    if (name.value !== '') {
      this.peopleService.add(new Person(name.value));
      name.value = '';
    }
  }

  onDelete(i) {
    this.peopleService.delete(i);
  }

}
