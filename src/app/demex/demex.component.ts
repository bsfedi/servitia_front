import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-demex',
  templateUrl: './demex.component.html',
  styleUrls: ['./demex.component.css']
})
export class DemexComponent {
  formulaire: FormGroup;
  message: string = '';
  myForm2: FormGroup;
  user_id: any
  informations: any
  constructor(private fb: FormBuilder, private service: ServiceService) {
    this.user_id = localStorage.getItem('user_id')
    this.formulaire = this.fb.group({
      // Définition des champs du formulaire
    });
    this.myForm2 = this.fb.group({
      date: [''],
      budget: ['', Validators.required],

    });
  }

  submitForm() {
    if (this.formulaire.valid) {
      // Logique de traitement du formulaire
      this.message = 'Formulaire envoyé avec succès !';
      // Vous pouvez également réinitialiser le formulaire ici : this.formulaire.reset();
    }

  }
  reserve(data: any) {
    this.service.demande_resexcursion(this.user_id, data).subscribe({
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
  scrape() {
    this.service.filter_excursion(this.user_id, { "date": this.myForm2.value.date, "budget": this.myForm2.value.budget }).subscribe({
      next: (res: any) => {
        this.informations = res
        console.log(this.informations);

      }, error(e) {
        console.log(e);

      }
    });
  }
}

