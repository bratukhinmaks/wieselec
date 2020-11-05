import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chosenChar: {char: string, counter: number}

  getValue(event: {char: string, counter: number}): void {
    this.chosenChar = event;
  }
}
