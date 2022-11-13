import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ngZorroConfig, ngxValdemortConfig } from 'Core/config';
import { ApiPrefixInterceptor, HeadersInterceptor } from 'Core/interceptors';
import { GlobalErrorHandler } from 'Core/services';
import { NZ_CONFIG } from 'ng-zorro-antd/core/config';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ValdemortConfig } from 'ngx-valdemort';
import { SharedModule } from 'Shared/shared.module';
import {
  AccountBookFill,
  AlertFill,
  AlertOutline,
} from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { InlineSVGModule } from 'ng-inline-svg';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { environment } from 'Env';
import { NZ_I18N, ru_RU } from 'ng-zorro-antd/i18n';

registerLocaleData(ru);
const icons: IconDefinition[] = [AccountBookFill, AlertOutline, AlertFill];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzIconModule.forRoot(icons),
    InlineSVGModule.forRoot(),
  ],
  providers: [
    { provide: NZ_CONFIG, useValue: ngZorroConfig },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
    { provide: ValdemortConfig, useValue: ngxValdemortConfig },
    { provide: LOCALE_ID, useValue: environment.defaultLocale },
    { provide: NZ_I18N, useValue: ru_RU },
    { provide: NZ_CONFIG, useValue: ngZorroConfig },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
