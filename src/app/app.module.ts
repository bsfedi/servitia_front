import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FirstComponent } from './first/first.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { InterfaceComponent } from './interface/interface.component';
import { OffresComponent } from './offres/offres.component';
import { DemandeComponent } from './demande/demande.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemhebComponent } from './demheb/demheb.component';
import { DemexComponent } from './demex/demex.component';
import { MdpOublComponent } from './mdp-oubl/mdp-oubl.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AffichageComponent } from './affichage/affichage.component';
import { PublicexComponent } from './publicex/publicex.component';
import { AdminComponent } from './admin/admin.component';
import { MydemandesComponent } from './mydemandes/mydemandes.component';
import { AvisComponent } from './avis/avis.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    FirstComponent,
    FooterComponent,
    LoginComponent,
    SignComponent,
    InterfaceComponent,
    OffresComponent,
    DemandeComponent,
    DemhebComponent,
    DemexComponent,
    MdpOublComponent,
   
    AffichageComponent,
        PublicexComponent,
        AdminComponent,
        MydemandesComponent,
        AvisComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
