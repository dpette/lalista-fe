import { environment } from './../environments/environment';
import { Component } from '@angular/core';

import {Angular2TokenService} from 'angular2-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private authToken: Angular2TokenService) {
    this.authToken.init({ apiBase: environment.apiUrl });
  }

}
