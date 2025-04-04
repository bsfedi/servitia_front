import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  constructor(private router: Router) { }

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
  gotoadmin() {
    console.log('bb')
    this.router.navigate(['/prestataire'])
  }
}
