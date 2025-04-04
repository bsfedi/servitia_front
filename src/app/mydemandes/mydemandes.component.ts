import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-mydemandes',
  templateUrl: './mydemandes.component.html',
  styleUrls: ['./mydemandes.component.css']
})
export class MydemandesComponent {
  signinForm: FormGroup;
  constructor(private router: Router, private service: ServiceService, private fb: FormBuilder) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  login(): void {
    this.service.login(this.signinForm.value).subscribe({
      next: (res) => {
        console.log(res);

        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.role);
        localStorage.setItem('user_id', res.user_id);
        // Swal.fire({
        //   background: '#F0FFFF',
        //   title: 'User anthentifié',
        //   text: 'User anthentifié avec succès !',

        //   confirmButtonText: 'OK',
        //   confirmButtonColor: "#FF8C00",
        // });
        if (res.role == 'client') {
          this.router.navigate(['/affichage'])
        } else {
          this.router.navigate(['/prestataire'])
        }


      },
      error: (e) => {
        Swal.fire({
          background: '#F0FFFF',
          title: 'Error',
          text: e.error.detail,
          confirmButtonText: 'OK',
          confirmButtonColor: "#FF8C00",
        });
        console.error()
      }


    });
  }
  gotosig() {
    console.log("abc")
    this.router.navigate(['/sign'])
  }
  gotoaffichage() {
    console.log("abc")
    this.router.navigate(['/affichage'])
  }
  gotoservice() {
    console.log("abc")
    this.router.navigate(['/service'])
  }
  gotoportfolio() {
    console.log("aaa")
    this.router.navigate(['/portfolio'])
  }
  gotohome() {
    this.router.navigate(['/mydemandes'])
  }
  gotoabout() {
    console.log("aaa")
    this.router.navigate(['/about'])
  }
  gotocontact() {
    console.log("oo")
    this.router.navigate(['/compte'])
  }
  gotosign() {
    console.log("abc")
    this.router.navigate(['/sign'])
  }
  gotologin() {
    console.log('bb')
    this.router.navigate(['/login'])
  }
  gotodemande() {
    console.log('bb')
    this.router.navigate(['/demande'])
  }
  gotoex() {
    console.log("ex")
    this.router.navigate(['/publicex'])
  }
  user_id: any
  resheb: any
  resexc: any
  informations: any
  showexcurtion = false
  all_excursion: any
  all_hotels: any
  show_all = true
  hebergement = false

  showPopup = false
  data: any
  ngOnInit(): void {
    this.showexcurtion = true
    this.user_id = localStorage.getItem('user_id')

    this.service.verify_email(this.user_id).subscribe({
      next: (res: any) => {
        Swal.fire({
          background: '#F0FFFF',
          title: 'Compte verifé',
          text: 'le compte a éte verifié avec succès !',

          confirmButtonText: 'OK',
          confirmButtonColor: "#FF8C00",
        });
        this.resheb = res.resheb
        this.resexc = res.resexc
      }, error(e) {
        console.log(e);

      }
    });


  }

  showexcurtiondata() {
    this.showexcurtion = true
    this.show_all = false
    this.hebergement = false
    this.service.excursion().subscribe({
      next: (res: any) => {
        this.all_excursion = res.all_information
      }, error(e) {
        console.log(e);

      }
    });
  }
  showhoteldata() {
    this.showexcurtion = false
    this.show_all = false
    this.hebergement = true
    this.service.hotels().subscribe({
      next: (res: any) => {
        this.all_hotels = res.all_information
      }, error(e) {
        console.log(e);

      }
    });
  }



  closePopup() {
    this.showPopup = false
  }
  showpopup(data: any) {

    this.showPopup = true


  }
  demande: any
  getdemande(dem_id: any) {
    this.service.getdemande(dem_id).subscribe({
      next: (res: any) => {
        this.demande = res
        this.showPopup = true

      }, error(e) {
        console.log(e);

      }
    })
  }

  deletedemande(dem_id: any) {
    this.service.delete_demande(dem_id).subscribe({
      next: (res: any) => {
        window.location.reload()
      }, error(e) {
        console.log(e);

      }
    })
  }
}
