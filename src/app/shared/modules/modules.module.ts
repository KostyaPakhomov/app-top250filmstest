import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroModule } from './ng-zorro.module';
@NgModule({
  declarations: [],
  imports: [CommonModule, NgZorroModule],
  exports: [FormsModule, NgZorroModule, ReactiveFormsModule, RouterModule],
})
export class ModulesModule {}
