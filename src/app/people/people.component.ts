import { Subscription } from 'rxjs/Subscription';
import { Person } from './person.model';
import { PeopleService } from './../people.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit, OnDestroy {

  people: Person [];

  peopleSubscription: Subscription;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.people = this.peopleService.getPeople();

    this.peopleSubscription = this.peopleService.peopleUpdated.subscribe(
      (people: Person[]) => {
        this.people = people;
      }
    );
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

  onArchive(i) {
    this.peopleService.archive(i);
  }

  ngOnDestroy() {
    this.peopleSubscription.unsubscribe();
  }

}
