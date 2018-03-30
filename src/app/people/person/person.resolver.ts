import { Injectable } from '@angular/core';
import { PeopleService } from './../../people.service';
import { Person } from './../person.model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PersonResolver implements Resolve<Person> {
  constructor(private peopleService: PeopleService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Person> | Promise<Person>  {
    return this.peopleService.getPerson(+route.params['id']);
  }
}
