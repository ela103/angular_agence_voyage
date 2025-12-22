import { Pipe, PipeTransform } from '@angular/core';
import { StatutReservation } from '../models/statut-reservation.string';

@Pipe({
  name: 'statutReservation'
})
export class StatutReservationPipe implements PipeTransform {
  transform(value: StatutReservation): string {
    switch(value) {
      case StatutReservation.EN_ATTENTE: return 'En attente';
      case StatutReservation.CONFIRMEE: return 'Confirmée';
      case StatutReservation.ANNULEE: return 'Annulée';
      default: return value;
    }
  }
}
