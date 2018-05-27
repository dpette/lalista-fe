import { NavService } from './../nav/nav.service';
import { Subscription } from 'rxjs/Subscription';
import { Person } from './person.model';
import { PeopleService } from './../people.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit, OnDestroy {

  people: Person [];

  peopleSubscription: Subscription;

  constructor(private peopleService: PeopleService, private navService: NavService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.people = this.peopleService.getPeople();

    this.navService.setTitle('Persone');
    this.navService.setBasicLevel();

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
    this.toastrService.success(this.people[i].name + ' non fa più parte de LALISTA');
    this.peopleService.archive(i);
  }

  ngOnDestroy() {
    this.peopleSubscription.unsubscribe();
  }

}
