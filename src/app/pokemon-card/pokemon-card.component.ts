import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../shared/services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {



  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemonService.findAll().then(response => {
      console.log(response)
    })
  }

}
