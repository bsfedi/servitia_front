import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicex',
  templateUrl: './publicex.component.html',
  styleUrls: ['./publicex.component.css']
})
export class PublicexComponent {
  

 @ViewChild('specificDivId') specificDiv: ElementRef | undefined;

  constructor() { }

  ngAfterViewInit() {
    // Scroll to the specific div when the component has been initialized
    if (this.specificDiv) {
      this.specificDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
