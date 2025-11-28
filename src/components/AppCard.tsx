interface AppCardProps {
  name: string;
  link: string;
  thumbnail: string;
}

export const AppCard = ({ name, link, thumbnail }: AppCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="glass-effect rounded-3xl overflow-hidden card-hover-effect">
        <div className="aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center overflow-hidden">
          <img 
            src={thumbnail} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
        </div>
      </div>
    </a>
  );
};
