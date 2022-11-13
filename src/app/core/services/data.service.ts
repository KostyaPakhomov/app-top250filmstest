import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { finalize, map, tap } from 'rxjs/operators';
import { Data, FilmsTop250, FormValue } from '../models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data$ = new BehaviorSubject<FilmsTop250[]>(this.data);
  isLoading = new BehaviorSubject<boolean>(false);

  private _data: FilmsTop250[] = [];
  get data(): FilmsTop250[] {
    return this._data;
  }
  set data(value: FilmsTop250[]) {
    this._data = value;
    this.data$.next(value);
  }

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  loadTop250() {
    this.isLoading.next(true);

    return this.http.get<Data>('').pipe(
      map(res =>
        res.items.map(film => {
          const { id, imDbRating, title, year } = film;
          return new FilmsTop250({ id, imDbRating, title, year });
        })
      ),
      tap(res => {
        this.data = res;
      }),
      finalize(() => this.isLoading.next(false))
    );
  }
  searchFilms(searchValue: FormValue) {
    if (!this.data) {
      return;
    }
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        title: searchValue.title ? searchValue.title : null,
        year: searchValue.year ? searchValue.year : null,
      },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  subscribeToQueryParamsChange() {
    this.route.queryParamMap.subscribe(paramMap => {
      const filteredValues = this.data.filter(
        film =>
          film.title
            .toLowerCase()
            .includes(paramMap.get('title') ? paramMap.get('title')! : '') &&
          film.year
            .toLowerCase()
            .includes(paramMap.get('year') ? paramMap.get('year')! : '')
      );
      this.data$.next(filteredValues);
    });
  }
}
