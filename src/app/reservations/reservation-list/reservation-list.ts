import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ReservationService } from '../../services/reservation';
import { ReservationDTO } from '../../models/reservation-dto'; // utiliser le DTO pour affichage
import { FormsModule } from '@angular/forms';
import { StatutPaiementPipe } from '../../pipes/statut-paiement-pipe';
import { StatutReservationPipe } from '../../pipes/statut-reservation-pipe';


@Component({
  selector: 'app-reservation-list',
  imports: [CommonModule, FormsModule, RouterModule,StatutReservationPipe],
  templateUrl: './reservation-list.html',
  standalone: true,
  styleUrls: ['./reservation-list.css'], // correction: styleUrls au pluriel
})
export class ReservationList implements OnInit {

  reservations: ReservationDTO[] = []; // DTO pour affichage
  

  constructor(
    private reservationService: ReservationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadReservations();
  }

  // Charger les réservations depuis le service
  loadReservations() {
    this.reservationService.listerReservations().subscribe(
      (data: ReservationDTO[]) => {
        this.reservations = data;
      },
      error => console.error('Erreur chargement reservations', error)
    );
  }

  // Navigation vers le formulaire d'édition
  editReservation(id: number) {
    this.router.navigate(['/reservations/edit', id]);
  }

  // Supprimer une réservation
  deleteReservation(id: number) {
    if (confirm('Voulez-vous vraiment supprimer cette réservation ?')) {
      this.reservationService.supprimerReservation(id).subscribe(
        () => this.loadReservations(),
        error => console.error('Erreur suppression reservation', error)
      );
    }
  }
  
}
