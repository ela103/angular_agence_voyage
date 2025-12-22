export interface ReservationPayload {
  client: { id: number };
  voyage: { id: number };
  dateReservation: string;
  nombrePersonnes: number;
  montantTotal: number;
  statut: string;
}
