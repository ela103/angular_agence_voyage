import { Pipe, PipeTransform } from '@angular/core';
import { StatutPaiement } from '../models/statut-paiement.string';

@Pipe({
  name: 'statutPaiement'
})
export class StatutPaiementPipe implements PipeTransform {
  transform(value: StatutPaiement): string {
    switch (value) {
      case StatutPaiement.EN_ATTENTE:
        return 'En attente';
      case StatutPaiement.PAYE:
        return 'Payé';
      case StatutPaiement.ECHOUE:
        return 'Échoué';
      default:
        return value;
    }
  }
}
