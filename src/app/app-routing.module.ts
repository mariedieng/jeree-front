import { AuthentificationComponent } from './components/authentification/authentification.component';
import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListesUsersComponent } from './components/listes-users/listes-users.component';
import { ListesVendeursComponent } from './components/listes-vendeurs/listes-vendeurs.component';
import { ListesClientsComponent } from './components/listes-clients/listes-clients.component';
import { ListesLivreursComponent } from './components/listes-livreurs/listes-livreurs.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBareComponent } from './components/side-bare/side-bare.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LivreursComponent } from './pages/livreurs/livreurs.component';
import { VendeursComponent } from './pages/vendeurs/vendeurs.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ListesProduitsComponent } from './components/listes-produits/listes-produits.component';
import { ModifierProduitsComponent } from './compenents/modifier-produits/modifier-produits.component';
import { ModifierClientsComponent } from './compenents/modifier-clients/modifier-clients.component';

const routes: Routes = [
  {
    path:'login',
    component: AuthentificationComponent
  },
  {
    path:'header',
    component: HeaderComponent
  },
  {
    path:'footer',
    component: FooterComponent
  },
  {
    path:'sidebare',
    component: SideBareComponent
  },
  {
    path:'Dashboard',
    component: DashboardComponent
  },
  {
    path:'users',
  component: ListesUsersComponent
  },
  {
    path:'vendeurs',
    component: ListesVendeursComponent
  },
  
  {
    path:'livreur',
    component: LivreursComponent
  },
  {
    path:'modifierp/:id',
    component:ModifierProduitsComponent
  },
  {
    path:'modifierc/:id',
    component:ModifierClientsComponent
  },
  {
    path:'produits',
    component: ListesProduitsComponent
  },
  {
    path:'produit',
    component: ListesProduitsComponent
  },
  {
    path:'vendeur',
    component: VendeursComponent
  },
  {
    path:'client',
    component: ClientsComponent
  },
  {
    path:'clients',
    component: ListesClientsComponent
  },
  {
    path:'livreurs',
    component: ListesLivreursComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
