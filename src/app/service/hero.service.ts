import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from '../model/hero';

// Mocks -> TO REMOVE
import { HEROES } from '../model/mock/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() {}

  public getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
