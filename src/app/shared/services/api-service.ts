import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  get(url: string, params = {}): Promise<Response> {
    return fetch(url, params);
  }

}
