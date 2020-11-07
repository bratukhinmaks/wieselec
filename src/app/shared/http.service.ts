import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  words: string[] = [
    'home',
    'house',
    'funerals',
    'cemestry',
    'glow'
  ]

  constructor() {
  }
  getWords(): Observable<string[]> {
    return of(this.words);
  }
}
