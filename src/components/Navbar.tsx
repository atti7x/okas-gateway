import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="glass-effect rounded-full px-6 py-3 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-sm font-bold text-primary-foreground">O</span>
          </div>
          <span className="text-sm font-semibold text-foreground">
            OKAS Hub
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          <a 
            href="#home" 
            className="text-sm text-foreground/80 hover:text-foreground transition-colors"
          >
            {t('nav.home')}
          </a>
          <a 
            href="https://placeholder.ai" 
            className="text-sm text-foreground/80 hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('nav.ai')}
          </a>
        </div>
      </div>
    </nav>
  );
};
