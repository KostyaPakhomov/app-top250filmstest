import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { backendErrorMsg } from 'Core/helpers';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandler extends ErrorHandler {
  modalRef!: NzModalRef;

  constructor(
    private zone: NgZone,
    private notificationService: NzNotificationService
  ) {
    super();
  }

  handleError(error: any) {
    while (error.rejection) {
      error = (error as any).rejection; // https://github.com/angular/angular/issues/27840
    }
    if (error instanceof HttpErrorResponse) {
      // Server or connection error happened
      if (!navigator.onLine) {
        // Handle offline error
      } else {
        // Handle Http Error (error.status === 403, 404...)
        switch (error.status) {
          case 401:
            this.zone.run(() => {
              // this.authService.logout();
            });
            break;

          default:
            this.notificationService.error(
              'Server error',
              backendErrorMsg(error)
            );
        }
      }
    } else {
      // Handle Client Error (Angular Error, ReferenceError...)
    }
    // Log the error anyway
    super.handleError(error);
  }
}
