import { NzConfig } from 'ng-zorro-antd/core/config';

export const ngZorroConfig: NzConfig = {
  descriptions: {
    nzSize: 'small',
  },
  tabs: {
    nzAnimated: false,
  },
  message: {
    nzDuration: 4500,
    nzMaxStack: 3,
  },
  codeEditor: {
    defaultEditorOption: {
      automaticLayout: true,
      minimap: {
        enabled: false,
      },
      scrollBeyondLastLine: false,
      fontSize: 14,
    },
  },
  timePicker: {
    nzSecondStep: 5,
  },
  table: {
    nzShowSizeChanger: true,
  },
};
