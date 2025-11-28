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
      {/* === GALAXY-CODE-PLACEHOLDER === */}
      {/* ReactBits Galaxy/Stars Canvas (1:1 Verhalten) */}
      <Galaxy
        mouseInteraction={true}
        mouseRepulsion={false}
        density={1.5}
        glowIntensity={0.5}
        saturation={0.4}
        hueShift={200}
        twinkleIntensity={0.5}
        rotationSpeed={0.01}
        speed={0.8}
      />
      
      <Navbar />

      <main className="relative pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
              {t('hero.title')}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto animate-fade-in">
              {t('hero.subtitle')}
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
              {t('apps.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto animate-fade-in">
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
