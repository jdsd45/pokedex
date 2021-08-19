import { Injectable, Injector } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CrudService } from './crud-service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService extends CrudService {

  constructor(injector: Injector) {
    super(environment.apiRessources.pokemon.pokemonSpecies, injector)
  }




}
