import { Component, OnInit } from '@angular/core';
import { trackByFn } from 'Core/helpers';
import { FilmsTop250 } from 'Core/models';
import { DataService } from 'Core/services';
import { Observable } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  readonly trackByFn = trackByFn;
  isLoading = false;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.isLoading.subscribe(res => (this.isLoading = res));
    this.dataService.subscribeToQueryParamsChange();
  }

  readonly observable$: Observable<FilmsTop250[]> = this.dataService.data$;
}
