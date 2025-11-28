import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  de: {
    translation: {
      nav: {
        home: 'Home',
        ai: 'AI'
      },
      hero: {
        title: 'OKAS Hub',
        subtitle: 'Dein zentraler Zugang zu allen OKAS Apps und Spielen'
      },
      apps: {
        title: 'Apps & Spiele'
      },
      language: {
        label: 'Sprache',
        german: 'Deutsch',
        english: 'English'
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        ai: 'AI'
      },
      hero: {
        title: 'OKAS Hub',
        subtitle: 'Your central access to all OKAS apps and games'
      },
      apps: {
        title: 'Apps & Games'
      },
      language: {
        label: 'Language',
        german: 'Deutsch',
        english: 'English'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'de',
    fallbackLng: 'de',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
