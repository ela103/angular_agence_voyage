import { StatutReservation } from "./statut-reservation.string";


export interface ReservationDTO {
  id: number;
  clientNom: string;
  voyageDestination: string;
  dateReservation: string;
  nombrePersonnes: number;
  montantTotal: number;
  statut: StatutReservation;
}
