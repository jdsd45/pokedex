import { Injectable, Injector } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon';
import { Observable, pipe } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    private apiRessource: string;

    constructor(
        private http: HttpClient
    ) {
        this.apiRessource = environment.apiRessources.pokemon.pokemonSpecies;
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
    findOne(askItem: number | string): Observable<Pokemon> {
        return this.http.get<Pokemon>(
            environment.apiUrl + this.apiRessource + '/' + askItem
        );
    }

    /**
     * Retourne tous les éléments
     */
    findAll(): Observable<Pokemon[]> {
        return this.http.get<{ count: number; next: string; results: Pokemon[] }>(
            environment.apiUrl + this.apiRessource
        ).pipe(map(r => r.results));
    }


}
