import { Angular2TokenService } from 'angular2-token';
import { NavService } from './../../nav/nav.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private navService: NavService, private tokenAuthSerivce: Angular2TokenService) { }

  ngOnInit() {
    this.navService.setTitle('Login');
    this.navService.setBasicLevel();
  }

  onSubmit(f) {
    console.log('form', f.value);

  }

}
