import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Galaxy from '@/components/Galaxy';
import { Navbar } from '@/components/Navbar';
import { AppCard } from '@/components/AppCard';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

interface AppEntry {
  name: string;
  link: string;
  thumbnail: string;
}

const Index = () => {
  const { t } = useTranslation();
  const [apps, setApps] = useState<AppEntry[]>([]);

  useEffect(() => {
    fetch('/config.json')
      .then((res) => res.json())
      .then((data) => setApps(data.entries))
      .catch((err) => console.error('Failed to load config:', err));
  }, []);

  return (
    <div className="min-h-screen relative">
      <Galaxy
        mouseInteraction={true}
        mouseRepulsion={true}
        density={1.2}
        glowIntensity={0.4}
        saturation={0.3}
        hueShift={200}
        twinkleIntensity={0.4}
        rotationSpeed={0.02}
      />
      
      <Navbar />

      <main className="relative pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              {t('hero.subtitle')}
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              {t('apps.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {apps.map((app, index) => (
              <div
                key={index}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <AppCard {...app} />
              </div>
            ))}
          </div>
        </div>
      </main>

      <LanguageSwitcher />
    </div>
  );
};

export default Index;
