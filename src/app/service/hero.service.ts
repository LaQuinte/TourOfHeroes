import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service'
import { Hero } from 'src/app/model/hero';

// Mocks -> TO REMOVE
import { HEROES } from 'src/app/model/mock/mock-heroes';

@Injectable({
	providedIn: 'root'
})
export class HeroService {

	constructor(private messageService: MessageService) { }

	public getHeroes(): Observable<Hero[]> {
		// TODO: send the message _after_ fetching the hero
		this.messageService.add('HeroService: fetched heroes');
		return of(HEROES);
	}

	public getHero(id: number): Observable<Hero> {
		// TODO: send the message _after_ fetching the hero
		this.messageService.add(`HeroService: fetched hero id=${id}`);
		return of(HEROES.find(hero => hero.id === id));
	}
}
