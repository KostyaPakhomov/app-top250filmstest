import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { DataService } from 'Core/services';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  form!: FormGroup;
  get title() {
    return this.form.get('title');
  }
  get year() {
    return this.form.get('year');
  }

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [null],
      year: [null],
    });
    this.route.queryParamMap.subscribe(paramMap => {
      this.title?.setValue(paramMap.get('title'));
      this.year?.setValue(paramMap.get('year'));
    });
  }

  search(): void {
    this.dataService.searchFilms(this.form.value);
  }
}
