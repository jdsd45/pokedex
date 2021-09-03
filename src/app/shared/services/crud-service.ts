import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

export abstract class CrudService<T> {
  constructor(protected http: HttpClient, protected apiRessource: string) {}

  /**
   * Retourne un élement
   */
  findOne(askItem: number | string): Observable<T> {
    return this.http.get<T>(
      environment.apiUrl + this.apiRessource + '/' + askItem
    );
  }

  /**
   * Retourne tous les éléments
   */
  findAll(): Observable<T[]> {
    return this.http.get<{ count: number; next: string; results: T[] }>(
      environment.apiUrl + this.apiRessource
    ).pipe(map(r => r.results));
  }
}
