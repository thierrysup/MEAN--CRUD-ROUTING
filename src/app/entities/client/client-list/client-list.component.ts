
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {Client} from '../../../models/client';
import {ClientService, ArticleService} from '../../../services/providers';
import { Article } from '../../../models/article';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClientListComponent implements OnInit {

  clients: Client[];
  articlesByUser: Article[];
  modalClient: Client;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getClients();
  }

  getClients(): void {
    this.clientService.getClients()
    .subscribe(clients => this.clients = clients);
  }

  updateArticle(id: any): void {
    this.clientService.getClient(id).subscribe(client => {this.modalClient = client ; this.articlesByUser = client.articles; });
  }

}

