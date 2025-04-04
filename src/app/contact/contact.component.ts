import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  myForm2: FormGroup;
  role: any
  constructor(private router: Router, private fb: FormBuilder, private service: ServiceService) {
    this.myForm2 = this.fb.group({
      date_arrive: [''],
      date_depart: ['', Validators.required],

      chambres: [''],
      nombre_enfant: ['']

    });
    this.role = localStorage.getItem('role')
  }
  informations: any
  showexcurtion = false
  all_excursion: any
  all_hotels: any
  show_all = true
  hebergement = false
  user_id: any
  showPopup = false
  data: any
  showavis() {

  }
  closePopup() {
    this.showPopup = false
  }
  showpopup(data: any) {
    console.log(this.user_id);

    if (this.user_id == null) {
      this.router.navigate(['/sign'])
    } else {
      this.data = data
      this.showPopup = true
    }

  }
  ngOnInit(): void {
    this.user_id = localStorage.getItem('user_id')
    if (this.showPopup == false) {
      this.service.getallinformations().subscribe({
        next: (res: any) => {

          this.informations = res.services
        }, error(e) {
          console.log(e);

        }
      });
    }

  }

  reserve() {
    this.data["demande"] = this.myForm2.value
    if (this.data.hotel) {
      this.service.demande_reshebergement(this.user_id, this.data).subscribe({
        next: (res: any) => {
          Swal.fire({
            background: '#F0FFFF',
            title: 'Demande envoyée',
            text: 'Votre demande est enovyée avec sucess !',

            confirmButtonText: 'OK',
            confirmButtonColor: "#FF8C00",
          });

        }, error(e) {
          console.log(e);

        }
      });
    } else {
      this.service.demande_resexcursion(this.user_id, this.data).subscribe({
        next: (res: any) => {
          Swal.fire({
            background: '#F0FFFF',
            title: 'Demande envoyée',
            text: 'Votre demande est enovyée avec sucess !',

            confirmButtonText: 'OK',
            confirmButtonColor: "#FF8C00",
          });

        }, error(e) {
          console.log(e);

        }
      });
    }




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
  showall() {
    this.showexcurtion = false
    this.show_all = true
    this.hebergement = false
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
    console.log("aaa")
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

}


