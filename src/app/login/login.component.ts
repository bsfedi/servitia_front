import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
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
  gotores() {
    console.log("abc")
    this.router.navigate(['/mdp-oubl'])
  }

  @ViewChild('specificDivId') specificDiv: ElementRef | undefined;



  ngAfterViewInit() {
    // Scroll to the specific div when the component has been initialized
    if (this.specificDiv) {
      this.specificDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

  }
}
