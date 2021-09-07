import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { tap, share } from 'rxjs/operators';

@Injectable()
export class CachingInterceptorInterceptor implements HttpInterceptor {

    private cache: Map<HttpRequest, HttpResponse> = new Map();

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (request.method !== "GET") {
            return next.handle(request);
        }

        const cachedResponse: HttpResponse = this.cache.get(request);

        if (cachedResponse) {
            return of(cachedResponse.clone())
        } else {
            return next.handle(request).pipe(
                tap(stateEvent => {
                    if (stateEvent instanceof HttpResponse) {
                        this.cache.set(request, stateEvent.clone())
                    }
                })
            ).share()
        }

    }
}
/*
@Injectable()
export class CachingInterceptor implements HttpInterceptor {
  constructor(private cache: RequestCache) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // continue if not cacheable.
    if (!isCacheable(req)) { return next.handle(req); }

    const cachedResponse = this.cache.get(req);
    return cachedResponse ?
      of(cachedResponse) : sendRequest(req, next, this.cache);
  }
} */