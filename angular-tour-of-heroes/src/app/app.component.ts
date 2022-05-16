import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { HeroService } from './components/services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  title = 'Deonte Tour of Heros Project';

  constructor(
    private readonly heroService: HeroService,
  ) {}

  ngOnInit(): void {
    this.subscription = this.heroService.getHeroes().subscribe(heros => {

    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()

  }

}
