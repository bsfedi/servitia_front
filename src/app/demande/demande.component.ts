import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent {
  user_id: any
  gotoheb() {
    console.log('bb')
    this.router.navigate(['/demheb'])

  }
  gotoex() {
    console.log('bb')
    this.router.navigate(['/demex'])
  }

  @ViewChild('specificDivId') specificDiv: ElementRef | undefined;
  constructor(private router: Router) {
    this.user_id = localStorage.getItem('user_id')
  }
  ngAfterViewInit() {
    // Scroll to the specific div when the component has been initialized
    if (this.specificDiv) {
      this.specificDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}



