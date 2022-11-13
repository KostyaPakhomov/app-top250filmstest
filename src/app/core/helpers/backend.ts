import { HttpErrorResponse } from '@angular/common/http';
import { getReasonPhrase } from 'http-status-codes';

export function backendErrorMsg(err: HttpErrorResponse) {
  return (
    err.error?.message ||
    err.error?.error ||
    err.message ||
    `${err.status} ${getReasonPhrase(err.status)}`
  );
}
