
import WarhammerLayout from "@/components/layout/WarhammerLayout";
import HeroSection from "@/components/HeroSection";
import WarhammerBookSection from "@/components/sections/WarhammerBookSection";
import FactionShowcase from "@/components/FactionShowcase";
import { featuredBooks, newReleases, popularBooks } from "@/data/warhammer40kData";
import { Button } from "@/components/ui/button";

const WarhammerHomePage = () => {
  return (
    <WarhammerLayout>
      <HeroSection />
      
      <section className="py-12 bg-warhammer-secondary relative">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-warhammer-chaos/20 to-warhammer-primary/20 rounded-lg p-6 md:p-8 border border-warhammer-accent/20 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading text-warhammer-accent mb-2">
                ЕРЕСЬ ХОРУСА: ПОЛНАЯ КОЛЛЕКЦИЯ
              </h2>
              <p className="text-warhammer-light/70 max-w-2xl">
                Эпическая сага о предательстве Воителя и падении Империума в пучину гражданской войны. Более 50 аудиокниг с профессиональным озвучиванием.
              </p>
            </div>
            <Button className="bg-warhammer-primary hover:bg-warhammer-primary/80 text-white whitespace-nowrap">
              Начать серию
            </Button>
          </div>
        </div>
      </section>
      
      <WarhammerBookSection 
        title="РЕКОМЕНДУЕМЫЕ АУДИОКНИГИ" 
        books={featuredBooks} 
        viewAllLink="/recommended"
      />
      
      <FactionShowcase />
      
      <WarhammerBookSection 
        title="НОВЫЕ РЕЛИЗЫ" 
        books={newReleases} 
        viewAllLink="/new-releases"
      />
      
      <section className="py-16 bg-warhammer-dark text-center relative">
        <div className="absolute inset-0 aquila-pattern"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-heading text-warhammer-accent mb-6">
            В ТЕМНОМ БУДУЩЕМ ЕСТЬ ТОЛЬКО ВОЙНА
          </h2>
          <p className="text-warhammer-light/70 max-w-3xl mx-auto mb-8 text-lg">
            Погрузитесь в мрачную атмосферу 41-го тысячелетия с нашей коллекцией аудиокниг Warhammer 40,000
          </p>
          <Button size="lg" className="bg-warhammer-primary hover:bg-warhammer-primary/80 text-white">
            Исследовать каталог
          </Button>
        </div>
      </section>
      
      <WarhammerBookSection 
        title="ПОПУЛЯРНЫЕ АУДИОКНИГИ" 
        books={popularBooks} 
        viewAllLink="/popular"
        showSeparator={false}
      />
    </WarhammerLayout>
  );
};

export default WarhammerHomePage;
