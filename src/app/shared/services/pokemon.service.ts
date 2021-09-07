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

    getPokemonByNameOrId(pokemonNameOrId: string | number): Observable<Pokemon> {
        return this.http.get<Pokemon>(
            environment.apiUrl + this.apiRessource + '/' + pokemonNameOrId
        );
    }

    getPokemonList(): Observable<Pokemon[]> {
        return this.http.get<{ count: number; next: string; results: Pokemon[] }>(
            environment.apiUrl + this.apiRessource
        ).pipe(
            map(r => r.results)
        );
    }

}
