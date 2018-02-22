import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Location} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import {Client} from '../../../models/client';
import {ClientService} from '../../../services/providers';



@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClientDetailComponent implements OnInit {

  client: Client = new Client();

  constructor(private router: Router, private route: ActivatedRoute,
    private location: Location, private clientService: ClientService) { }

  ngOnInit() {
    this.getClientDetail(this.route.snapshot.params['id']);
  }

  getClientDetail(id) {
    this.clientService.getClient(id)
      .subscribe(client => this.client = client);
  }

  goBack(): void {
    this.location.back();
  }
  goTable(): void {
    this.router.navigate(['home/clients']);
  }

  deleteClient(id) {
    this.clientService.deleteClient(id).subscribe(() => this.goTable());
  }

}

