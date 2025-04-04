import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  signinForm: FormGroup;
  serviceForm: FormGroup
  showPopup = false
  user_info: any
  user_id: any
  all_excursion: any
  selectedFile: File | null = null;
  allavis: any
  all_users: any
  dem_id: any
  email: any
  constructor(private router: Router, private fb: FormBuilder, private service: ServiceService) {
    this.signinForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      specialite: ['', [Validators.required]],
      descriptif: ['', [Validators.required]],
      prix: ['', [Validators.required]],

    });
    this.user_id = localStorage.getItem('user_id')

    // Nouveau formulaire pour Service
    this.serviceForm = this.fb.group({
      nom: ['', [Validators.required]],
      description: ['', [Validators.required]],
      user_id: [localStorage.getItem('user_id'), [Validators.required]],
      prix: ['', [Validators.required]],
      lieux: ['', [Validators.required]],
    });
  }
  closePopup() {
    this.showPopup = false
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }
  onSubmitService() {
    if (this.serviceForm.valid) {
      const requestData = this.serviceForm.value; // Récupérer l'objet JSON du formulaire

      this.service.createservice(requestData).subscribe({
        next: (res: any) => {
          Swal.fire({
            background: '#F0FFFF',
            title: 'Service ajouté',
            text: 'Votre service a été créé avec succès !',
            confirmButtonText: 'OK',
            confirmButtonColor: "#FF8C00",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload(); // Reload the page after confirmation
            }
          });
        },
        error(e) {
          console.log(e);
        }
      });
    } else {
      Swal.fire({
        background: '#F0FFFF',
        title: 'Erreur',
        text: 'Veuillez remplir tous les champs obligatoires.',
        confirmButtonText: 'OK',
        confirmButtonColor: "#FF0000",
      });
    }
  }


  showformadd = false;

  showform() {
    this.showformadd = !this.showformadd; // Toggle the value
  }

  onSubmit() {
    if (this.signinForm.valid && this.selectedFile) {
      const formData = new FormData();

      // Ajouter tous les champs du formulaire à formData
      Object.keys(this.signinForm.value).forEach((key) => {
        formData.append(key, this.signinForm.value[key]);
      });

      // Ajouter le fichier si sélectionné
      if (this.selectedFile) {
        formData.append('fichier', this.selectedFile);
      }
      formData.append('img_url', this.selectedFile);  // Ajouter l'image
      this.service.edituser(this.user_id, formData).subscribe({
        next: (res: any) => {
          Swal.fire({
            background: '#F0FFFF',
            title: 'Status modifié',
            text: 'Les informations du compte a été enregitré avec succès !',
            confirmButtonText: 'OK',
            confirmButtonColor: "#FF8C00",
          });
        },
        error(e) {
          console.log(e);
        }
      });
    } else {
      Swal.fire({
        background: '#F0FFFF',
        title: 'Erreur',
        text: 'Veuillez remplir tous les champs obligatoires.',
        confirmButtonText: 'OK',
        confirmButtonColor: "#FF0000",
      });
    }
  }

  showpopu(email: any, dem_id: any) {
    this.email = email
    this.dem_id = dem_id
    this.showPopup = true
    console.log("eeeeeeee");

  }
  show_cmnts = false
  ngOnInit(): void {
    this.service.user_by_id(this.user_id).subscribe({
      next: (res: any) => {
        this.user_info = res.user
        console.log(this.user_info);


      }, error(e) {
        console.log(e);

      }
    });
    this.service.get_services_by_user(this.user_id).subscribe({
      next: (res: any) => {
        this.all_excursion = res.services



      }, error(e) {
        console.log(e);

      }
    });

    this.show_encours = true
    this.avis()

    this.demande_res_encours()
    this.demande_res_effectuer()
  }
  showavis() {
    this.show_cmnts = true
    this.show_encours = false
    this.show_effec = false
  }


  avis() {
    this.service.avis().subscribe({
      next: (res: any) => {
        this.allavis = res

      }, error(e) {
        console.log(e);

      }
    });
  }
  gotoaffichage() {
    this.router.navigate(['/affichage'])
  }
  show_users: any
  get_users() {

    this.show_users = true
    this.show_demandes = false
    this.show_encours = false
    this.show_cmnts = false
    this.show_effec = false


  }
  agences: any
  show_agences: any
  getagences() {
    this.service.getagences().subscribe({
      next: (res: any) => {
        this.agences = res.agences
        this.show_agences = true
        this.show_demandes = false
        this.show_encours = false
        this.show_cmnts = false
        this.show_effec = false
        this.show_users = false
      }, error(e) {
        console.log(e);

      }
    });

  }


  all_demandes_ecu: any
  all_demandes_heb: any
  show_demandes: any
  getalldemandes() {
    this.service.getalldemandes().subscribe({
      next: (res: any) => {
        this.all_demandes_ecu = res.resexc
        this.all_demandes_heb = res.resheb
        this.show_demandes = true
        this.show_encours = false
        this.show_agences = false
        this.show_cmnts = false
        this.show_effec = false
        this.show_users = false

      }, error(e) {
        console.log(e);

      }
    });
  }
  exc_demande_res_encours: any
  heb_demande_res_encours: any
  show_encours: any
  demande_res_encours() {
    this.show_encours = true
    this.show_cmnts = false

  }
  exc_demande_res_effectuer: any
  heb_demande_res_effectuer: any
  show_effec: any
  demande_res_effectuer() {
    this.service.demande_res_effectuer().subscribe({
      next: (res: any) => {
        this.exc_demande_res_effectuer = res.resexc
        this.heb_demande_res_effectuer = res.resheb
        this.show_effec = true
        this.show_encours = false
        this.show_demandes = false
        this.show_cmnts = false
        this.show_agences = false
        this.show_users = false
      }, error(e) {
        console.log(e);

      }
    });
  }
  deleteavis(avis_id: any) {
    this.service.deleteavis(avis_id).subscribe({
      next: (res: any) => {

        Swal.fire({
          background: '#F0FFFF',
          title: 'Avis supprimée',
          text: 'Avis est supprimée avec sucess !',

          confirmButtonText: 'OK',
          confirmButtonColor: "#FF8C00",
        });
      }, error(e) {
        console.log(e);

      }
    });

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
  // putdemande_resexcursion(dem_id: any) {
  //   this.service.putdemande_resexcursion(dem_id).subscribe({
  //     next: (res: any) => {

  //       Swal.fire({
  //         background: '#F0FFFF',
  //         title: 'status modifée',
  //         text: 'Le status du demande modifée avec sucess !',

  //         confirmButtonText: 'OK',
  //         confirmButtonColor: "#FF8C00",
  //       });
  //     }, error(e) {
  //       console.log(e);

  //     }
  //   });
  // }
  putdemande_reshebergement(dem_id: any) {
    this.service.putdemande_reshebergement(dem_id).subscribe({
      next: (res: any) => {

        Swal.fire({
          background: '#F0FFFF',
          title: 'status modifée',
          text: 'Le status du demande modifée avec sucess !',

          confirmButtonText: 'OK',
          confirmButtonColor: "#FF8C00",
        });
      }, error(e) {
        console.log(e);

      }
    });
  }
}
