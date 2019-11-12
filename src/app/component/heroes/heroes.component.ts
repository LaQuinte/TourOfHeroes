import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../model/hero';

import { HeroService } from '../../service/hero.service';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

	selectedHero: Hero;

	heroes: Hero[];

	constructor(private heroService: HeroService) { }

	ngOnInit() {
		this.setHeroes();
	}

	private setHeroes(): void {
		this.heroService.getHeroes()
			.subscribe(heroes => this.heroes = heroes);
	}


	public onSelect(hero: Hero) {
		this.selectedHero = hero;
		console.log(this.selectedHero);
	}

}
