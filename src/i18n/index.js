import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import uk from './uk.js';
import ru from './ru.js';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      uk: { translation: uk },
      ru: { translation: ru },
    },
    lng: 'uk',
    fallbackLng: 'uk',
    interpolation: { escapeValue: false },
  });

export default i18n;
