import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from 'Shared/shared.module';
import { ShellRoutingModule } from './shell-routing.module';
import { FiltersComponent } from './filters/filters.component';
import { ResultComponent } from './result/result.component';
import { ShellComponent } from './shell.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {
  validation: false,
};

@NgModule({
  declarations: [FiltersComponent, ResultComponent, ShellComponent],
  imports: [
    CommonModule,
    SharedModule,
    ShellRoutingModule,
    NgxMaskModule.forRoot(options),
  ],
})
export class ShellModule {
  constructor(@Optional() @SkipSelf() parentModule: ShellModule) {
    if (parentModule) {
      const msg = `ShellModule has already been loaded.
        Import ShellModule once, only, in the root AppModule.`;
      throw new Error(msg);
    }
  }
}
