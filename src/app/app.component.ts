import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chosenChar: string

  getValue(event: string): void {
    this.chosenChar = event;
  }
}
