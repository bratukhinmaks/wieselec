import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.css']
})
export class AlphabetComponent implements OnInit {
  @Output() clickValue: EventEmitter<{char: string, counter: number}> = new EventEmitter<{char: string, counter: number}>();
  charArr: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  clickCounter: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  createValue(char: string) {
    if (this.clickCounter < 6) {
      this.clickCounter++;
    } else {
      this.clickCounter = 0;
    }
    this.clickValue.emit({char, counter: this.clickCounter});
  }
}
