import { Component, OnInit } from '@angular/core';
import {CounterService} from "../shared/counter.service";

@Component({
  selector: 'app-hungman',
  templateUrl: './hungman.component.html',
  styleUrls: ['./hungman.component.css']
})
export class HungmanComponent implements OnInit {

  constructor(public counter: CounterService) { }

  ngOnInit(): void {
  }

}
