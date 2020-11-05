import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-gamefield',
  templateUrl: './gamefield.component.html',
  styleUrls: ['./gamefield.component.css']
})
export class GamefieldComponent implements OnInit {
  @Input() chosenChar: {char: string, counter: number};
  currentLevel: number;
  constructor() { }

  ngOnInit(): void {
  }

}
