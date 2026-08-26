import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.js';
import uk from './uk.js';
import ru from './ru.js';
import { currentLocale, DEFAULT_LOCALE } from '../lib/locale.js';

/* The active language is decided by the URL (see lib/locale.js), never by
   browser detection: a language the visitor did not navigate to would render
   under a URL that claims otherwise, which breaks canonical/hreflang. */
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      uk: { translation: uk },
      ru: { translation: ru },
    },
    lng: currentLocale,
    fallbackLng: DEFAULT_LOCALE,
    interpolation: { escapeValue: false },
  });

export default i18n;
