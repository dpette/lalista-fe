import { Injectable } from '@angular/core';

@Injectable()
export class NavService {

  navbarCollapsed = false;
  pageTitle = '';
  secondaryLevel = false;

  constructor() { }

  toggleNav() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

  closeNav() {
    this.navbarCollapsed = false;
  }

  setTitle(title) {
    this.pageTitle = title;
  }

  setSecondaryLevel() {
    this.secondaryLevel = true;
  }

  setBasicLevel() {
    this.secondaryLevel = false;
  }

}
