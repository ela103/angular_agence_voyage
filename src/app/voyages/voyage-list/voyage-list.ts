import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { VoyageService } from '../../services/voyage';
import { Router, RouterModule } from '@angular/router';
import { Voyage } from '../../models/voyage';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-voyage-list',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './voyage-list.html',
  styleUrls: ['./voyage-list.css'],
})
export class VoyageList implements OnInit {
  voyages: Voyage[] = [];

  constructor(private voyageService: VoyageService, private router: Router) {}

  ngOnInit(): void {
    this.loadVoyages();
  }

  loadVoyages() {
    this.voyageService.listerVoyages().subscribe(data => this.voyages = data);
  }
  editVoyage(id: number) {
    this.router.navigate(['/voyages/edit', id]);
  }

  deleteVoyage(id: number) {
    this.voyageService.supprimerVoyage(id).subscribe(() => this.loadVoyages());
  }

}
