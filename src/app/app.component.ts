import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isFilter = true;
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    const path = document.location.href.split('/').pop();
    this.isFilter = path === 'shell' ? true : false;
    this.checkRoute(this.isFilter);
  }
  checkRoute(check: boolean) {
    check
      ? this.router.navigate(['/shell'], { relativeTo: this.route })
      : this.router.navigate(['/layout'], { relativeTo: this.route });
  }
}
