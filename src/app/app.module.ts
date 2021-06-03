import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptorService } from './helpers/error-interceptor.service';
import { ListesUsersComponent } from './components/listes-users/listes-users.component';
import { ListesVendeursComponent } from './components/listes-vendeurs/listes-vendeurs.component';
import { ListesClientsComponent } from './components/listes-clients/listes-clients.component';
import { ListesLivreursComponent } from './components/listes-livreurs/listes-livreurs.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBareComponent } from './components/side-bare/side-bare.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LivreursComponent } from './pages/livreurs/livreurs.component';
import { VendeursComponent } from './pages/vendeurs/vendeurs.component';
import { ClientsComponent } from './pages/clients/clients.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    ListesUsersComponent,
    ListesVendeursComponent,
    ListesClientsComponent,
    ListesLivreursComponent,
    HeaderComponent,
    SideBareComponent,
    FooterComponent,
    DashboardComponent,
    LivreursComponent,
    VendeursComponent,
    ClientsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
