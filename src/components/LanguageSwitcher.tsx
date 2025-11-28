import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'de' ? 'en' : 'de';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <Button
        onClick={toggleLanguage}
        variant="outline"
        className="glass-effect rounded-full px-6 py-3 border-glass-border hover:bg-secondary/20 transition-all"
      >
        {i18n.language === 'de' ? t('language.english') : t('language.german')}
      </Button>
    </div>
  );
};
