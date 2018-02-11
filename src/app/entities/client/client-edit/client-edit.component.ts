import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


import {Client} from '../../../models/client';
import {ClientService} from '../../../services/providers';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClientEditComponent implements OnInit {

  client: Client = new Client();

  constructor(private clientService: ClientService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getClient(this.route.snapshot.params['id']);
  }

  getClient(id) {
    this.clientService.getClient(id).subscribe(client => this.client = client);
  }

  updateClient(client) {
      this.clientService.updateClient(client).subscribe(() => this.router.navigate(['/client-details', client.id]));
  }

}

