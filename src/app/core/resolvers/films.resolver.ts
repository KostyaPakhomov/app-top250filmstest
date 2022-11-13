import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { FilmsTop250 } from '../models';
import { DataService } from '../services';

@Injectable({ providedIn: 'root' })
export class FilmsResolver implements Resolve<FilmsTop250[]> {
  get top250() {
    return this.dataService.data;
  }

  constructor(private dataService: DataService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<FilmsTop250[]> | Promise<FilmsTop250[]> | FilmsTop250[] {
    if (!this.top250.length) {
      return this.dataService.loadTop250();
    }

    return this.top250;
  }
}
