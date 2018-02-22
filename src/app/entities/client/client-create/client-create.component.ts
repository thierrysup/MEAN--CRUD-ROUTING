
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import {Client} from '../../../models/client';
import {ClientService} from '../../../services/providers';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClientCreateComponent implements OnInit {

  client: Client;

  constructor(private clientService: ClientService, private router: Router) {
     this.client = new Client();
   }

  ngOnInit() {
  }
  saveClient() {
       this.clientService.addClient(this.client).subscribe(client => {
            this.router.navigate(['home/clients']);
          }
      );
    }
}

