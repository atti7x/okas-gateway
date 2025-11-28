import { useTranslation } from 'react-i18next';
import okasLogo from '@/assets/okas-logo.png';

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="glass-effect rounded-full px-6 py-3 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <img 
            src={okasLogo} 
            alt="OKAS Logo" 
            className="w-8 h-8 object-contain"
          />
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
