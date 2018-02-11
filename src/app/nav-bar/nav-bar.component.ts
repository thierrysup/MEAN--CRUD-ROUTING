import { Component, OnInit, Renderer, ViewChild, ElementRef } from '@angular/core';
import { ROUTES } from '../side-bar/side-bar.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private listTitles: any[];
  location: Location;
  private nativeElement: Node;
  private toggleButton;
  private sidebarVisible: boolean;

  @ViewChild('app-nav-bar') button;

  constructor(location: Location, private renderer: Renderer, private element: ElementRef) {
      this.location = location;
      this.nativeElement = element.nativeElement;
      this.sidebarVisible = false;
  }

  ngOnInit() {
      this.listTitles = ROUTES.filter(listTitle => listTitle);
      // tslint:disable-next-line:prefer-const
      let navbar: HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
  }
  getTitle() {
      let titlee = window.location.pathname;
      titlee = titlee.substring(1);
      for (let item = 0; item < this.listTitles.length; item++) {
          if (this.listTitles[item].path === titlee) {
              return this.listTitles[item].title;
          }
      }
      return 'Dashboard';
  }
  sidebarToggle() {
      // tslint:disable-next-line:prefer-const
      let toggleButton = this.toggleButton;
      // tslint:disable-next-line:no-var-keyword
      // tslint:disable-next-line:prefer-const
      let body = document.getElementsByTagName('body')[0];

      if (this.sidebarVisible === false) {
          setTimeout(function(){
              toggleButton.classList.add('toggled');
          }, 500);
          body.classList.add('nav-open');
          this.sidebarVisible = true;
      } else {
          this.toggleButton.classList.remove('toggled');
          this.sidebarVisible = false;
          body.classList.remove('nav-open');
      }
  }
}
