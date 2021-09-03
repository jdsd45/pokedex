import { Injectable, Injector } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CrudService } from './crud-service';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon';
import { Observable, pipe } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PokemonService extends CrudService<Pokemon> {

    constructor(
        protected http: HttpClient
    ) {
        super(http, environment.apiRessources.pokemon.pokemonSpecies)
    }

    getPokemonByNameOrId(pokemon: string | number): Observable<Pokemon> {
        return this.findOne(pokemon);
    }

    getPokemonList(): Observable<Pokemon[]> {
        return this.findAll();
    }

}
