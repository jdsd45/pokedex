import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../shared/services/pokemon.service';
import { Pokemon } from '../shared/models/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  //@Input() pokemon: Pokemon;

  /*   constructor(
      private pokemonService: PokemonService
    ) {
      //this.pokemon = null;
    } */

  ngOnInit(): void {

    /*     this.pokemonService.getPokemonByNameOrId(3)
          .subscribe(p => {
            this.pokemon = p
          }) */

  }

}
