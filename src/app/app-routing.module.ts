import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServiceComponent } from './service/service.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SignComponent } from './sign/sign.component';
import { LoginComponent } from './login/login.component';
import { InterfaceComponent } from './interface/interface.component';
import { DemandeComponent } from './demande/demande.component';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DemhebComponent } from './demheb/demheb.component';
import { DemexComponent } from './demex/demex.component';
import { MdpOublComponent } from './mdp-oubl/mdp-oubl.component';
import { AffichageComponent } from './affichage/affichage.component';
import { PublicexComponent } from './publicex/publicex.component';
import { AdminComponent } from './admin/admin.component';
import { MydemandesComponent } from './mydemandes/mydemandes.component';
import { AvisComponent } from './avis/avis.component';



const routes: Routes = [
  { path: "*", component: LoginComponent },
  { path: "first", component: FirstComponent },
  { path: "mydemandes", component: MydemandesComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "service", component: ServiceComponent },
  { path: "footer", component: FooterComponent },
  { path: "contact", component: ContactComponent },
  { path: "about", component: AboutComponent },
  { path: "sign", component: SignComponent },
  { path: "login", component: LoginComponent },
  { path: "interfacepub", component: InterfaceComponent },
  { path: "demande", component: DemandeComponent },
  { path: "demheb", component: DemhebComponent },
  { path: "demex", component: DemexComponent },
  { path: "mdp-oubl", component: MdpOublComponent },
  { path: "affichage", component: AffichageComponent },
  { path: "publicex", component: PublicexComponent },
  { path: "prestataire", component: AdminComponent },
  { path: "compte", component: AvisComponent }, {
    path: '',
    pathMatch: 'full',
    redirectTo: `/login`,  // Redirect to the sign-in route
  },
  {
    path: '*',
    pathMatch: 'full',
    redirectTo: `login`
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule,
  BsDatepickerModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
