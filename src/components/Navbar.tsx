import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
      <div className="glass-effect rounded-full px-8 py-4 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-xl font-bold text-primary-foreground">O</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            OKAS Hub
          </span>
        </div>
        
        <div className="flex items-center gap-8">
          <a 
            href="#home" 
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            {t('nav.home')}
          </a>
          <a 
            href="https://placeholder.ai" 
            className="text-foreground hover:text-primary transition-colors font-medium"
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
