import { Person } from './person.model';
import { PeopleService } from './../people.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit, OnDestroy {

  people: Person [];
  peopleUpdated: Subscription;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.people = this.peopleService.getPeople();

    this.peopleUpdated = this.peopleService.peopleFetched.subscribe(
      (people: Person[]) => {
        this.people = people;
      }
    );
  }

  onSubmit(name: HTMLInputElement) {
    this.peopleService.add(new Person(name.value));
    name.value = '';
  }

  onDelete(i) {
    this.peopleService.delete(i);
  }

  ngOnDestroy() {
    this.peopleUpdated.unsubscribe();
  }

}
