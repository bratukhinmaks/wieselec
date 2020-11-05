import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CounterService} from '../shared/counter.service';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.css']
})
export class AlphabetComponent implements OnInit {
  @Output() clickValue: EventEmitter< string> = new EventEmitter<string>();
  charArr: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  constructor(private count: CounterService) {
  }

  ngOnInit(): void {
  }

  createValue(char: string) {
   this.clickValue.emit(char);
  }
}
