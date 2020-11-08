import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  words: string[] = [
    'home',
    'house',
    'man',
    'woman',
    'glow'
  ]

  constructor() {
  }
  getWords(): Observable<string[]> {
    return of(this.words);
  }
}
