# Agence de Voyage - Application Frontend Angular

## Contexte du projet
Ce projet constitue la partie **frontend** d'une application d'agence de voyage. Il est développé en **Angular** et consomme les API REST créées lors du backend (DS1) avec Spring Boot. L’objectif est de permettre la gestion des clients, voyages, réservations et paiements via une interface web moderne.

L’application respecte les notions vues en cours :  
- Data binding (interpolation, property binding, event binding, two-way binding)  
- Directives structurelles et attributives (*ngFor, *ngIf, ngClass)  
- Communication entre composants (@Input, @Output, EventEmitter)  
- Utilisation de pipes standards et personnalisés  
- Hooks du cycle de vie (ngOnInit, ngOnDestroy)  
- Formulaires avec validation et messages d’erreur  
- Services Angular avec HttpClient pour les opérations CRUD

---

## Technologies utilisées
- **Frontend** : Angular, TypeScript, HTML, CSS, Bootstrap  
- **Backend** : Spring Boot (REST API existantes)  
- **Outils** : VS Code, Git, GitHub, Node.js, npm  

---
## Organisation du projet
Le projet Angular est organisé comme suit :

src/app/
├─ client-list.ts / client-form.ts
├─ voyage-list.ts / voyage-form.ts
├─ reservation-list.ts / reservation-form.ts
├─ paiement-list.ts / paiement-form.ts
├─ models/
│  ├─ client.ts
│  ├─ voyage.ts
│  ├─ reservation.ts
│  ├─ reservation-dto.ts
│  ├─ paiement.ts
│  └─ enums/ (StatutPaiement, StatutReservation)
├─ services/
│  ├─ client.service.ts
│  ├─ voyage.service.ts
│  ├─ reservation.service.ts
│  └─ paiement.service.ts
├─ pipes/
│  ├─ statut-paiement.pipe.ts
│  └─ statut-reservation.pipe.ts
├─ app.routes.ts
└─ app.module.ts / main.ts

## Organisation du projet
Le projet Angular est organisé comme suit :

src/app/
├─ client-list.ts / client-form.ts
├─ voyage-list.ts / voyage-form.ts
├─ reservation-list.ts / reservation-form.ts
├─ paiement-list.ts / paiement-form.ts
├─ models/
│  ├─ client.ts
│  ├─ voyage.ts
│  ├─ reservation.ts
│  ├─ reservation-dto.ts
│  ├─ paiement.ts
│  └─ enums/ (StatutPaiement, StatutReservation)
├─ services/
│  ├─ client.service.ts
│  ├─ voyage.service.ts
│  ├─ reservation.service.ts
│  └─ paiement.service.ts
├─ pipes/
│  ├─ statut-paiement.pipe.ts
│  └─ statut-reservation.pipe.ts
├─ app.routes.ts
└─ app.module.ts / main.ts

Fonctionnalités principales

Gestion des clients : ajout, modification, suppression, affichage

Gestion des voyages : ajout, modification, suppression, affichage

Gestion des réservations : ajout, modification, suppression, affichage, calcul montant total

Gestion des paiements : ajout, suppression, affichage, lien avec réservation

Validation des formulaires avec messages d’erreur pour les champs obligatoires

Hooks Angular : ngOnInit, ngOnDestroy pour initialisation et nettoyage

Pipes personnalisés pour l’affichage des statuts 

 Instructions pour lancer le projet
1. Cloner le repository :  
   `git clone <URL_GITHUB>`
2. Installer les dépendances :  
   `npm install`
3. Lancer le serveur Angular :  
   `ng serve`
4. Accéder à l’application sur :  
   `http://localhost:4200`

---

## Conclusion
Le projet frontend Angular est une interface complète pour gérer une agence de voyage.  
Toutes les fonctionnalités principales sont connectées au backend via des API REST, avec une navigation fluide, des formulaires validés et des composants modulaires.  
Ce projet démontre la maîtrise des concepts fondamentaux d’Angular, ainsi que la capacité à structurer un projet réel et à consommer des services backend existants.

