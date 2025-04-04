import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent {
  signupForm: FormGroup;
  constructor(private router: Router, private service: ServiceService, private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      role: ['', Validators.required],
      date_naissance: [''],
      telephone: ['']
    });
  }
  gotolog() {
    console.log("abc")
    this.router.navigate(['/login'])
  }
  @ViewChild('specificDivId') specificDiv: ElementRef | undefined;



  ngAfterViewInit() {
    // Scroll to the specific div when the component has been initialized
    if (this.specificDiv) {
      this.specificDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


  saveUser(): void {
    this.service.create(this.signupForm.value).subscribe({
      next: (res) => {

        Swal.fire({
          background: '#F0FFFF',
          title: 'Compte créé',
          text: 'Le compte a été créé avec succès !',
          confirmButtonText: 'OK',
          confirmButtonColor: "#FF8C00",

        });

      },
      error: (e) => {
        Swal.fire({
          background: '#F0FFFF',
          title: 'Error',
          text: e.error.message,
          confirmButtonText: 'OK',
          confirmButtonColor: "#FF8C00",
        });
        console.error()
      }


    });
  }

}
