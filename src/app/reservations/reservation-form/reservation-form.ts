import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReservationService } from '../../services/reservation';
import { Voyage } from '../../models/voyage';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client';
import { VoyageService } from '../../services/voyage';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Reservation } from '../../models/reservation';
import { StatutReservation } from '../../models/statut-reservation.string';
import { ReservationDTO } from '../../models/reservation-dto';
import { ReservationPayload } from '../../models/reservation-payload';

@Component({
  selector: 'app-reservation-form',
  imports: [CommonModule, FormsModule,RouterModule],
  standalone: true,
  templateUrl: './reservation-form.html',
  styleUrl: './reservation-form.css',
})
export class ReservationForm implements OnInit {

  reservation: Reservation = {
    id: 0,
    client: { id: 0, nom: '', email: '' },
    voyage: { id: 0, destination: '', prixParPersonne: 0 },
    dateReservation: '',
    nombrePersonnes: 1,
    montantTotal: 0,
    statut: StatutReservation.EN_ATTENTE
  };

  clients: Client[] = [];
  voyages: Voyage[] = [];
  reservations: Reservation[] = [];
  isEditMode = false;
  constructor(
    private reservationService: ReservationService,
    private clientService: ClientService,
    private voyageService: VoyageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.clientService.listerClients().subscribe(data => this.clients = data);
    this.voyageService.listerVoyages().subscribe(data => this.voyages = data);
    
    
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditMode = true;
      this.reservationService.getReservationById(+id).subscribe(data => this.reservation = data);
    }
  }

saveReservation() {
  const clientSelectionne = this.clients.find(c => c.id === this.reservation.client.id);
  const voyageSelectionne = this.voyages.find(v => v.id === this.reservation.voyage.id);

  if (!clientSelectionne || !voyageSelectionne) {
    alert('Sélection invalide');
    return;
  }
  

  // Crée un objet conforme à Spring Boot
  const payload: ReservationPayload = {
    client: { id: clientSelectionne.id! },
    voyage: { id: voyageSelectionne.id },
    dateReservation: this.reservation.dateReservation,
    nombrePersonnes: this.reservation.nombrePersonnes,
    montantTotal: this.reservation.nombrePersonnes * voyageSelectionne.prixParPersonne,
    statut: this.reservation.statut
  };

  this.reservationService.addReservation(payload)
    .subscribe(
      () => this.router.navigate(['/reservations']),
      err => console.error('Erreur ajout', err)
    );
}


}
