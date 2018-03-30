import { NavService } from './nav.service';
import { ViewChild, Renderer2 } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor(private renderer: Renderer2, public navService: NavService) { }

  ngOnInit() {
  }

  onToggleCollapse() {
    this.navService.toggleNav();
  }


}
