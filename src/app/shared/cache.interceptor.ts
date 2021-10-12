import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpResponse, HttpEvent } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  private cache: Map<HttpRequest<any>, HttpResponse<any>> = new Map();

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            console.log('coucou')
            console.log(event)
            this.cache.set(request, event)
            console.log(this.cache)
          }
          return event;
        }
      ))
  }
}
