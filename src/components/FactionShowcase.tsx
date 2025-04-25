
import { Link } from "react-router-dom";
import { factions } from "@/data/warhammer40kData";

const factionImages = {
  "imperium": "https://images.unsplash.com/photo-1579803815267-1857bf7e7b62?q=80&w=2070&auto=format&fit=crop",
  "chaos": "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?q=80&w=1974&auto=format&fit=crop",
  "eldar": "https://images.unsplash.com/photo-1513477967668-2aaf11838bd6?q=80&w=1974&auto=format&fit=crop",
  "orks": "https://images.unsplash.com/photo-1612957773626-0e6c3ff80865?q=80&w=1974&auto=format&fit=crop",
  "tyranids": "https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=1974&auto=format&fit=crop",
  "necrons": "https://images.unsplash.com/photo-1624118374838-b1cd0e800def?q=80&w=1974&auto=format&fit=crop",
  "tau": "https://images.unsplash.com/photo-1623834379526-844fbfc5a408?q=80&w=1974&auto=format&fit=crop",
  "inquisition": "https://images.unsplash.com/photo-1546353239-8253d1ca6572?q=80&w=1974&auto=format&fit=crop",
};

const FactionShowcase = () => {
  return (
    <section className="py-16 bg-warhammer-dark relative">
      <div className="absolute inset-0 aquila-pattern"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading text-warhammer-accent mb-4">
            ФРАКЦИИ ВСЕЛЕННОЙ WARHAMMER 40K
          </h2>
          <p className="text-warhammer-light/70 max-w-3xl mx-auto">
            Изучите богатую историю и литературу каждой фракции через профессионально озвученные аудиокниги
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {factions.map((faction) => (
            <Link 
              to={`/faction/${faction.slug}`} 
              key={faction.id}
              className="faction-card relative overflow-hidden rounded-lg aspect-[4/3] group"
            >
              <img 
                src={factionImages[faction.slug as keyof typeof factionImages] || "https://images.unsplash.com/photo-1536566482680-fca31930a0bd?q=80&w=1974&auto=format&fit=crop"} 
                alt={faction.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warhammer-dark via-warhammer-dark/50 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-heading text-warhammer-accent mb-2 group-hover:text-warhammer-primary transition-colors">
                    {faction.name}
                  </h3>
                  <div className="w-16 h-1 bg-warhammer-primary mb-3 transform origin-left scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <p className="text-warhammer-light/70 text-sm">
                    Исследовать аудиокниги
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactionShowcase;
