import { Reservation } from './reservation';
import { StatutPaiement } from './statut-paiement.string';


export interface Paiement {
  id?: number;
  reservation: Reservation;
  datePaiement: string; // ou Date
  montant: number;
  statut: StatutPaiement;
}

