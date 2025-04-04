import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  @ViewChild('specificDivId') specificDiv: ElementRef | undefined;

  constructor() { }

  ngAfterViewInit() {
    // Scroll to the specific div when the component has been initialized
    if (this.specificDiv) {
      this.specificDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
