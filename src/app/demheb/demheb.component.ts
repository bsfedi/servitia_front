import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-demheb',
  templateUrl: './demheb.component.html',
  styleUrls: ['./demheb.component.css']
})
export class DemhebComponent {
  formulaire: FormGroup;
  message: string = '';
  budget: any
  isfiltred: boolean = false
  informations: any
  filtred_item: any = []
  user_id: any
  myForm2: FormGroup;

  constructor(private fb: FormBuilder, private service: ServiceService) {
    this.user_id = localStorage.getItem('user_id')
    this.myForm2 = this.fb.group({
      date_arrive: [''],
      date_depart: ['', Validators.required],
      destination: [''],
      chambres: [''],
      nombre_enfant: ['']

    });
    this.formulaire = this.fb.group({
      budget: ['']
    });
  }

  filterByPrice(maxPrice: number): any[] {
    this.isfiltred = true
    this.filtred_item = []
    return this.informations.filter((hotel: any) => {
      // Remove spaces and 'DT' from the price string and convert it to a number
      const price = parseFloat(hotel.prix.replace(/\s/g, '').replace('DT', '').replace(',', '.'));
      // Check if the price is within the specified range
      if (price <= maxPrice) {
        this.filtred_item.push(hotel)
      }
    });
  }

  scrape() {
    this.service.get_hotles(this.user_id, this.myForm2.value).subscribe({
      next: (res: any) => {
        this.informations = res.hotel_names
        console.log(this.informations);

      }, error(e) {
        console.log(e);

      }
    });
  }

  reserve(data: any) {
    data["demande"] = this.myForm2.value
    data['budget'] = this.formulaire.value.budget
    this.service.demande_reshebergement(this.user_id, data).subscribe({
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

  submitForm() {
    if (this.formulaire.valid) {
      // Logique de traitement du formulaire
      this.message = 'Formulaire envoyé avec succès !';
      // Vous pouvez également réinitialiser le formulaire ici : this.formulaire.reset();
    }




  }
}
