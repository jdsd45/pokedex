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
export class PokemonService {

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


    /**
     * Retourne un élement
     */
    findOne(askItem: number | string): Observable<T> {
        return this.http.get<T>(
            environment.apiUrl + this.apiRessource + '/' + askItem
        );
    }

    /**
     * Retourne tous les éléments
     */
    findAll(): Observable<T[]> {
        return this.http.get<{ count: number; next: string; results: T[] }>(
            environment.apiUrl + this.apiRessource
        ).pipe(map(r => r.results));
    }


}
