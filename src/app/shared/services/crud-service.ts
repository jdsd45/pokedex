import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { map } from 'rxjs/operators';


export abstract class CrudService<T> {

    constructor(
        private http: HttpClient,
        private apiRessource: string,
    ) { }

    /**
     * Retourn un élement
     * @param askItem 
     * @returns 
     */
    findOne(askItem: number | string): Observable<T> {
        return this.http.get<T>(environment.apiUrl + this.apiRessource + '/' + askItem);
    }

    findAll(): Observable<T> {
        return this.http.get<T>(environment.apiUrl + this.apiRessource);
    }



}