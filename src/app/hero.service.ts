import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './heroes/hero';
import { Heroes } from './heroes/hero-list';

import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })

export class HeroService {

  getHero(id: number): Observable<Hero> {
    const hero = Heroes.find(h => h.id === id)!;
    this.messageService.add(`HeroService: Agente seleccionado (id: ${id})`);
    return of(hero);
  }


  getHeroes(): Observable<Hero[]> {
    const heroes = of(Heroes);
    this.messageService.add('HeroService: agentes cargados')
    return heroes;
  }

  constructor(private messageService: MessageService) { }
}
