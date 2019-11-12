import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service'
import { Hero } from '../model/hero';

// Mocks -> TO REMOVE
import { HEROES } from '../model/mock/mock-heroes';

@Injectable({
	providedIn: 'root'
})
export class HeroService {

	constructor(private messageService: MessageService) { }

	public getHeroes(): Observable<Hero[]> {
		this.messageService.add('HeroService: fetched heroes');
		return of(HEROES);
	}
}
