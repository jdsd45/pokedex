import { environment } from "src/environments/environment";
import { ApiService } from "./api-service";


export abstract class CrudService {

    constructor(
        public apiRessource: String,
        private apiService: ApiService
    ) { }

    /**
     * Retourne un élément
     * @param id 
     * @returns 
     */
    findOne(id: number): Promise<Response> {
        let url = 'https://pokeapi.co/api/v2/pokemon-species/'
        return this.request(environment.apiUrl + id)
    }

    findAll(): Promise<Response> {
        return this.request(url);
    }

    request(apiRessource, params = {}): Promise<Response> {
        return fetch(apiRessource, params)
    }



}