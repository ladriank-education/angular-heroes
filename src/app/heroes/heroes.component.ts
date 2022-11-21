import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  isVisible: boolean = false;

  heroesList: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
   this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroesList => this.heroesList = heroesList)
  }

  /*
  onSelect(selectedHero: Hero): void {
    this.messageService.add(`HeroesComponent: Agente seleccionado (id: ${selectedHero.id})`)
    this.hero = selectedHero;
  }
  */

  setNameChangerVisibility(flag: boolean): void{
    this.isVisible = flag; 
  }

  toggleNameChangerVisibility(): void{
    this.isVisible = (this.isVisible)? false : true; 
  }

  

  

}