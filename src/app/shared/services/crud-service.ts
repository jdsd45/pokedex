import { ApiService } from "./api-service";


export abstract class CrudService {

    constructor(
        public apiRessource: String,
        private apiService: ApiService
    ) { }

    /**
     * Retourn un élement
     * @param askItem 
     * @returns 
     */
    findOne(askItem: number | string): Promise<Response> {
        return this.apiService.get(this.apiRessource + '/' + askItem)
    }

    findAll(): Promise<Response> {
        return this.apiService.get(url);
    }




}