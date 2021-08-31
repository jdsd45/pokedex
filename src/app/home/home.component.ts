import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pokemon } from '@shared/models/pokemon';
import { PokemonService } from '../shared/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //pokemons: Pokemon[] = [];

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe(
      pokemons => {
        console.log(pokemons)
      }
    )
  }

}
