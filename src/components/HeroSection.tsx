
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero-section py-20 md:py-32 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-warhammer-light mb-4">
            <span className="text-warhammer-primary">WARHAMMER 40,000</span>
            <br />
            <span className="text-warhammer-accent">АУДИО</span>БИБЛИОТЕКА
          </h1>
          <p className="text-warhammer-light/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Погрузитесь в мрачное будущее 41-го тысячелетия с профессионально озвученными аудиокнигами вселенной Warhammer 40K
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-warhammer-primary hover:bg-warhammer-primary/80 text-white">
              Начать слушать
            </Button>
            <Link to="/catalog">
              <Button size="lg" variant="outline" className="border-warhammer-accent text-warhammer-accent hover:bg-warhammer-accent/10">
                Каталог аудиокниг
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
