import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../model/hero';

import { HeroService } from '../../service/hero.service';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

	heroes: Hero[];

	constructor(private heroService: HeroService) { }

	ngOnInit() {
		this.setHeroes();
	}

	private setHeroes(): void {
		this.heroService.getHeroes()
			.subscribe(heroes => this.heroes = heroes);
	}

	public add(name: string): void {
		name = name.trim();
		if (!name) { return; }
		this.heroService.addHero({ name } as unknown as Hero)
			.subscribe(hero => {
				this.heroes.push(hero);
			});
	}

	public delete(hero: Hero): void {
		this.heroes = this.heroes.filter(h => h !== hero);
		this.heroService.deleteHero(hero).subscribe();
	}


}