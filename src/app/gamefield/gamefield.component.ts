import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {CounterService} from '../shared/counter.service';
import {HttpService} from "../shared/http.service";
import {concatAll, map, take, tap} from "rxjs/operators";


@Component({
  selector: 'app-gamefield',
  templateUrl: './gamefield.component.html',
  styleUrls: ['./gamefield.component.css']
})
export class GamefieldComponent implements OnInit, OnChanges {
  @Input() chosenChar: string;
  @Output() restart: EventEmitter<any> = new EventEmitter<any>()
  currentLevel = 0;
  words: any = [];
  actualChar: string;
  gameOver = false;
  visibleNumber = 0;
  winner = false;
  startTime: number;
  finishTime: number;

  constructor(public counter: CounterService, public http: HttpService) {
  }

  ngOnInit(): void {
    this.startTime = new Date().getTime();
    this.http.getWords().pipe(
      take(5),
      concatAll(),
      map(v => v.split('')),
      map(v => {
        return {chars: v};
      }),
      map((v) => {
          return v.chars.map(item => {
            return {char: item, visability: false};
          });
        }
      )
    ).subscribe((v) => this.words.push(v));
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const char in this.words[this.currentLevel]) {
      if (this.chosenChar === this.words[this.currentLevel][char].char) {
        this.actualChar = this.words[this.currentLevel][char].char;
        this.words[this.currentLevel][char].visability = true;
        this.visibleNumber++;
      }
    }
    if (this.counter.count < 6 && this.chosenChar !== this.actualChar) {
      this.counter.count++;
    } else if (this.counter.count >= 6) {
      this.counter.count = 0;
      this.gameOver = true;
    }
    this.checkIfWordComplete(this.words[this.currentLevel])
  }

  checkIfWordComplete(word: any): void {
    if(word) {
      if (this.visibleNumber === word.length) {
        this.restart.emit();
        this.currentLevel++;
        this.visibleNumber = 0;
        this.counter.count = 0;
      }
      if(this.currentLevel >= 5) {
        this.winner = true;
        const actualTime = new Date().getTime()
        this.finishTime = new Date(actualTime - this.startTime).getTime() / 1000;
      }
    }
  }

  startAgain(): void {
    this.startTime = new Date().getTime();
    this.winner = false;
    this.gameOver = false;
    this.counter.count = 0;
    this.currentLevel = 0;
    this.visibleNumber = 0;
    for(const char in this.words[this.currentLevel]) {
      this.words[this.currentLevel][char].visability = false;
    }
    this.restart.emit()
  }
}
