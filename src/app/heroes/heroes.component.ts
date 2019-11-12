import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../model/hero';

import { HEROES } from '../mock/mock-heroes';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

	selectedHero: Hero;

	heroes = HEROES;

	constructor() { }

	ngOnInit() {
	}

	public onSelect(hero: Hero) {
		this.selectedHero = hero;
		console.log(this.selectedHero);
	}

}
