import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CounterService} from '../shared/counter.service';

@Component({
  selector: 'app-gamefield',
  templateUrl: './gamefield.component.html',
  styleUrls: ['./gamefield.component.css']
})
export class GamefieldComponent implements OnInit, OnChanges {
  @Input() chosenChar: string;
  currentLevel: number;
  constructor(public counter: CounterService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.chosenChar !== ){

    }
  }

}
