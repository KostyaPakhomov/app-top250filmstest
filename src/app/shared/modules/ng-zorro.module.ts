import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPipesModule } from 'ng-zorro-antd/pipes';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    NzAlertModule,
    NzButtonModule,
    NzDescriptionsModule,
    NzDividerModule,
    NzDrawerModule,
    NzEmptyModule,
    NzFormModule,
    NzIconModule,
    NzInputModule,
    NzInputNumberModule,
    NzLayoutModule,
    NzMessageModule,
    NzModalModule,
    NzNotificationModule,
    NzPageHeaderModule,
    NzPaginationModule,
    NzPipesModule,
    NzSpinModule,
    NzTableModule,
    NzTypographyModule,
    NzSwitchModule,
  ],
})
export class NgZorroModule {}
