import { defaultNS, resources } from '../i18n/helpers';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: (typeof resources)['pt-PT'];
  }
}
