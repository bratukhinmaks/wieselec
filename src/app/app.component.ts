import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chosenChar: string;
  @ViewChild('alphabet',{static: false}) al: ElementRef;

  getValue(event: string): void {
    this.chosenChar = event;
  }
}
