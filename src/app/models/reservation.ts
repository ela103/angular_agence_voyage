import { Client } from './client';
import { StatutReservation } from './statut-reservation.string';
import { Voyage } from './voyage';


export interface Reservation {
  id: number;
  client: Client;             // Objet complet avec au moins l'id
  voyage: Voyage;             // Objet complet avec au moins l'id
  dateReservation: string;    // ISO date string
  nombrePersonnes: number;
  montantTotal: number;
  statut: StatutReservation;
}
