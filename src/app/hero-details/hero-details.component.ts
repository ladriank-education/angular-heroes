import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../heroes/hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  isVisible: boolean = false;

  hero!: Hero;




  toggleNameChangerVisibility(): void{
    this.isVisible = (this.isVisible)? false : true; 
  }


  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
  this.location.back();
}

}
