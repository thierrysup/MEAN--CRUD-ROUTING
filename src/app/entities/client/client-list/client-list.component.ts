
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {Client} from '../../../models/client';
import {ClientService} from '../../../services/providers';
import { Article } from '../../../models/article';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClientListComponent implements OnInit {

  clients: Client[];
  modalClient: Client = new Client();

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getClients();
  }

  getClients(): void {
    this.clientService.getClients()
    .subscribe(clients => this.clients = clients);
  }

  showArticlesByClient(client: any): void {
    this.modalClient = client;
  }

}

