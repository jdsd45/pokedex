import { HttpClient } from '@angular/common/http';

export abstract class CrudService<T> {

    constructor(
        public http: HttpClient,
        public apiRessource: String
    ) { }

    findOne(id: number): Promise<Response> {
        let url = 'https://pokeapi.co/api/v2/pokemon-species/'
        return fetch(url + id)
    }


}