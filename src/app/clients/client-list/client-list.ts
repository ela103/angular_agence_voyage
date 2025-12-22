import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client';
import { Client } from '../../models/client';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-list',
  imports: [CommonModule,RouterModule],
  templateUrl: './client-list.html',
  styleUrls: ['./client-list.css'],

})
export class ClientList implements OnInit{
   clients: Client[] = [];

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
    this.clientService.listerClients().subscribe(data => this.clients = data);
  }
  editClient(id: number) {
    this.router.navigate(['/clients/edit', id]);
  }

  deleteClient(id: number) {
    this.clientService.supprimerClient(id).subscribe(() => this.loadClients());
  }


}
