import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'Env';
import { Observable } from 'rxjs';

@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
  apiKey = environment.apiKey;
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Skipping absolute urls
    if (!/^(http|https):/i.test(request.url)) {
      request = request.clone({ url: environment.backendUrl + `/${this.apiKey}` + request.url });
    }

    return next.handle(request);
  }
}
