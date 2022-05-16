import { Component, OnInit } from "@angular/core";
import {Hero} from '../Interfaces/Ihero'
import { HeroService } from "../services/hero.service";

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss']
})

export class HeroComponent implements OnInit {
     heroes: Hero[] = [];

     selectedHero?: Hero;
     onSelect(Ihero: Hero): void {
         this.selectedHero = Ihero;
     }

    

    constructor(private heroService: HeroService) {

    }

    ngOnInit(): void {
        this.getHeroes();
    }
    getHeroes(): void {
      this.heroService.getHeroes()
           .subscribe(heroes => this.heroes = heroes);
    }
}