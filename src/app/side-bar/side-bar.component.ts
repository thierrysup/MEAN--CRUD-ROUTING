import { Component, OnInit } from '@angular/core';

import { RouteInfo } from '../models/route-info';


declare let $: any;

export const ROUTES: RouteInfo[] = [
  { path: 'clients', title: 'Clients List',  icon: 'ti-view-list-alt', class: '' },
  { path: 'articles', title: 'Articles List',  icon: 'ti-view-list-alt', class: '' },
  {path: 'logs' , title: 'History Action', icon: 'ti-alarm-clock', class : ''}
];

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  public menuItems: any[];
  ngOnInit() {
      this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isNotMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  }

}
