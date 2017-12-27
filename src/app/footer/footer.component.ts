import { Component,HostBinding, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  day : Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
