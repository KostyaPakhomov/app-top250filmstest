import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // HTTP client works with immutable request object and all its consistuent parts
    let headers = req.headers;

    headers = headers.set('Accept', 'application/json');

    const newReq = req.clone({ headers });

    return next.handle(newReq);
  }
}
