import { ViewChild, Renderer2 } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navbarCollapsed = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  onToggleCollapse() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

}
