import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../services/client';
import { Client } from '../../models/client';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client-form.html',
  styleUrls: ['./client-form.css'],
})
export class ClientForm implements OnInit {
  client: Client = { id:null, nom: '', email: '' };
  isEditMode = false;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
   const id = this.route.snapshot.params['id'];
if (id) {
  this.isEditMode = true;
  this.clientService.getClientById(+id).subscribe({
    next: (data) => this.client = data
  });
} else {
  this.isEditMode = false;
  this.client = { id: null, nom: '', email: '' }; // réinitialiser pour ajout
}
  }

  saveClient(): void {
  console.log('Form submitted:', this.client, 'isEditMode:', this.isEditMode);

  if (this.isEditMode) {
    // ID non-null pour mise à jour
    if (this.client.id == null) {
      console.error('Erreur : ID du client est null en mode édition');
      return;
    }
    this.clientService.mettreAJourClient(this.client.id, this.client)
      .subscribe({
        next: () => this.router.navigate(['/clients']),
        error: (err) => console.error('Erreur mise à jour client:', err)
      });
  } else {
    // Assurer que l'ID est null pour nouvel ajout
    this.client.id = null;

    this.clientService.ajouterClient(this.client)
      .subscribe({
        next: (res) => {
          console.log('Client ajouté:', res);
          this.router.navigate(['/clients']);
        },
        error: (err) => console.error('Erreur ajout client:', err)
      });
  }
}

}
