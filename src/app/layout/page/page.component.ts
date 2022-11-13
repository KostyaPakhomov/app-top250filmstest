import { Component, HostListener, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { rates } from 'Core/constants';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  readonly rates = rates;
  isMobile = false;
  mobileWidth = 400;
  constructor() {}

  ngOnInit(): void {
    this.isMobile = this.checkWidth(window);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = this.checkWidth(event.target);
  }

  checkWidth(area: Window): boolean {
    return area.innerWidth > this.mobileWidth ? false : true;
  }
}
