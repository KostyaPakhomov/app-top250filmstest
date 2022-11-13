import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModulesModule } from './modules/modules.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [ModulesModule],
})
export class SharedModule {}
