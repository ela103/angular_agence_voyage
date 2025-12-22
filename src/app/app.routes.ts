import { Routes } from '@angular/router';
import { ClientList } from './clients/client-list/client-list';
import { ClientForm } from './clients/client-form/client-form';
import { VoyageList } from './voyages/voyage-list/voyage-list';
import { VoyageForm } from './voyages/voyage-form/voyage-form';
import { ReservationList } from './reservations/reservation-list/reservation-list';
import { ReservationForm } from './reservations/reservation-form/reservation-form';
import { PaiementList } from './paiements/paiement-list/paiement-list';
import { PaiementForm } from './paiements/paiement-form/paiement-form';
import { HomeComponent } from './pages/home/home';

export const routes: Routes = [

{ path: '', component: HomeComponent },   // 👈 page d’accueil
  { path: 'clients', loadComponent: () => import('./clients/client-list/client-list').then(m => m.ClientList) },
  { path: 'voyages', loadComponent: () => import('./voyages/voyage-list/voyage-list').then(m => m.VoyageList) },
  { path: 'reservations', loadComponent: () => import('./reservations/reservation-list/reservation-list').then(m => m.ReservationList) },
  { path: 'paiements', loadComponent: () => import('./paiements/paiement-list/paiement-list').then(m => m.PaiementList) },


  { path: 'clients', component: ClientList },
  { path: 'clients/add', component: ClientForm },
  { path: 'clients/edit/:id', component: ClientForm },
  { path: '', redirectTo: 'clients', pathMatch: 'full' },
  
  

  // Voyages
  { path: 'voyages', component: VoyageList },
  { path: 'voyages/add', component: VoyageForm },
  { path: 'voyages/edit/:id', component: VoyageForm },

   // Réservations
  { path: 'reservations', component: ReservationList },
  { path: 'reservations/add', component: ReservationForm },
  { path: 'reservations/edit/:id', component: ReservationForm },

  // Paiements
  { path: 'paiements', component: PaiementList },
  { path: 'paiements/add', component: PaiementForm },
  { path: 'paiements/edit/:id', component: PaiementForm },

  { path: '', redirectTo: 'clients', pathMatch: 'full' }


];
