import { Router, NavigationEnd } from '@angular/router';
import { environment } from './../environments/environment';
import { Component, OnInit } from '@angular/core';

import {Angular2TokenService} from 'angular2-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private router: Router, private authToken: Angular2TokenService) {
    this.authToken.init({ apiBase: environment.apiUrl });
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
  });
  }

}
