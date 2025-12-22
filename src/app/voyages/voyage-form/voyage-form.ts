import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, RouterModule } from '@angular/router';
import { VoyageService } from '../../services/voyage';
import { Voyage } from '../../models/voyage';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-voyage-form',
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './voyage-form.html',
  styleUrls: ['./voyage-form.css'],
})
export class VoyageForm implements OnInit {
  voyage: Voyage = { destination: '', prixParPersonne: null as any } as Voyage;
  isEditMode = false;

  constructor(
    private voyageService: VoyageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditMode = true;
      this.voyageService.getVoyageById(+id).subscribe(data => this.voyage = data);
    }
  }saveVoyage() {
    if (this.isEditMode) {
      this.voyageService.modifierVoyage(this.voyage.id, this.voyage).subscribe(() => {
        this.router.navigate(['/voyages']);
      });
    } else {
      this.voyageService.ajouterVoyage(this.voyage).subscribe(() => {
        this.router.navigate(['/voyages']);
      });
    }
  }

}
