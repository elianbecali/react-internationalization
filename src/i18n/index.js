import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { resources } from './locales';

i18next
  .use(LanguageDetector)
  .init({
    debug: false,
    fallbackLng: 'pt',
    resources
  });

export { i18next };
