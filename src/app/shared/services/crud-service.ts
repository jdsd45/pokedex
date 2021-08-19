import { Injector } from "@angular/core";
import { ApiService } from "./api-service";


export abstract class CrudService {

    protected apiService: ApiService;

    constructor(
        protected apiRessource: string,
        protected injector: Injector
    ) {
        this.apiService = injector.get(ApiService);
    }

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