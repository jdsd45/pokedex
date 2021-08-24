import { HttpClient } from "@angular/common/http";
import { Injector } from "@angular/core";


export abstract class CrudService {

    constructor(
        private http: HttpClient,
        private apiRessource: string,
    ) {  }

    /**
     * Retourn un élement
     * @param askItem 
     * @returns 
     */
    findOne(askItem: number | string): Promise<Response> {
        return this.apiService.get(this.apiRessource + '/' + askItem)
    }

    findAll(): Promise<Response> {
        return this.apiService.get(this.apiRessource);
    }



}