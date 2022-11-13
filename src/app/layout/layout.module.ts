import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { PageComponent } from './page/page.component';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  declarations: [LayoutComponent, PageComponent],
  imports: [CommonModule, LayoutRoutingModule],
})
export class LayoutModule {}
