import { Component, OnInit } from '@angular/core';
import { RouteInfo } from '../route-info';

//here we need to use global variable ...
//don't forget to inject jquery lib in index.html ... 
declare var $: any;

export const ROUTES: RouteInfo[] = [
  { path: 'books', title: 'Books List',  icon: 'ti-view-list-alt', class: '' },
  {path:'logs' ,title:'History Action',icon: 'ti-alarm-clock',class: ''}
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
  isNotMobileMenu(){
      if($(window).width() > 991){
          return false;
      }
      return true;
  }

}
