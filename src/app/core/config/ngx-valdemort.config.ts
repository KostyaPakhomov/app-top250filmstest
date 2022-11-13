import { environment } from 'Env';
import { DisplayMode, ValdemortConfig } from 'ngx-valdemort';

export const ngxValdemortConfig: Partial<ValdemortConfig> = {
  errorsClasses: 'ant-form-item-explain',
  displayMode: DisplayMode.ONE,
  shouldDisplayErrors(control, form) {
    return control.dirty;
  },
  shouldThrowOnMissingControl() {
    return !environment.production;
  },
};
