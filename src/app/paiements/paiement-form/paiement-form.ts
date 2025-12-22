import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { StatutPaiement } from '../../models/statut-paiement.string';
import { Paiement } from '../../models/paiement';
import { PaiementService } from '../../services/paiement';
import { Reservation } from '../../models/reservation';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReservationService } from '../../services/reservation';
@Component({
  selector: 'app-paiement-form',
  imports: [FormsModule,CommonModule,RouterModule],
  standalone: true,
  templateUrl: './paiement-form.html',
  styleUrl: './paiement-form.css',
})
export class PaiementForm {
 paiement: Paiement = {
  reservation: {} as Reservation,
  datePaiement: '',
  montant: 0,
  statut: StatutPaiement.EN_ATTENTE
  };
statuts: StatutPaiement[] = [
    StatutPaiement.EN_ATTENTE,
    StatutPaiement.PAYE,
    StatutPaiement.ECHOUE
  ];

  constructor(private paiementService: PaiementService,private reservationService: ReservationService, private router: Router) {}
 onReservationIdChange(): void {
    const id = this.paiement.reservation.id;
    if (id) {
      this.reservationService.getReservationById(id).subscribe({
        next: (res: Reservation) => {
          this.paiement.montant = res.montantTotal;
          this.paiement.datePaiement = res.dateReservation;
        },
        error: (err: any) => {
          console.error('Réservation non trouvée', err);
          this.paiement.montant = 0;
          this.paiement.datePaiement = '';
        }
      });
    } else {
      this.paiement.montant = 0;
      this.paiement.datePaiement = '';
    }
  }

  submit() {
    this.paiementService.ajouterPaiement(this.paiement).subscribe(() => {
      this.router.navigate(['/paiements']);
    });
  }

}
