import { Component, OnInit } from '@angular/core';
import { PaiementService } from '../../services/paiement';
import { Paiement } from '../../models/paiement';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StatutPaiementPipe } from '../../pipes/statut-paiement-pipe';

@Component({
  selector: 'app-paiement-list',
  imports: [CommonModule,FormsModule,RouterModule,StatutPaiementPipe],
  standalone: true,
  templateUrl: './paiement-list.html',
  styleUrl: './paiement-list.css',
})
export class PaiementList implements OnInit {
  paiements: Paiement[] = [];

  constructor(private paiementService: PaiementService) {}

  ngOnInit(): void {
    this.loadPaiements();
  }

  loadPaiements() {
    this.paiementService.listerPaiements().subscribe(data => this.paiements = data);
  }

  deletePaiement(id: number) {
    this.paiementService.supprimerPaiement(id).subscribe(() => this.loadPaiements());
  }

}
