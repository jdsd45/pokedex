import { HttpClient } from '@angular/common/http';

export abstract class CrudService<T> {

    constructor(
        public http: HttpClient,
        public apiRessource: String
    ) { }

    findOne(id: number): Promise<T> {
        return new Promise<T>
    }

}