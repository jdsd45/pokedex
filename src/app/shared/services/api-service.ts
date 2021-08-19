import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor() { }

    get(apiRessource: string, params = {}): Promise<Response> {
        const url = environment.apiUrl + apiRessource;
        return fetch(url, params);
    }

}
