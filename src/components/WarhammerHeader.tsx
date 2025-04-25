
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Menu, Heart, User, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import WarhammerLogo from "./WarhammerLogo";
import { factions, series } from "@/data/warhammer40kData";

const WarhammerHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-warhammer-accent/30 sticky top-0 z-10 bg-warhammer-secondary">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2">
              <WarhammerLogo className="h-10 w-auto" />
            </Link>
            <Button 
              variant="ghost" 
              className="hidden md:flex text-warhammer-light hover:text-warhammer-accent"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Menu className="mr-2" />
              Каталог
            </Button>
          </div>

          <div className="flex-1 max-w-xl mx-4 hidden md:block">
            <div className="relative">
              <Input
                type="search"
                placeholder="Поиск аудиокниг Warhammer 40K..."
                className="pl-10 pr-4 bg-warhammer-dark text-warhammer-light border-warhammer-accent/30 focus:border-warhammer-accent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-warhammer-accent/70" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden sm:flex text-warhammer-light hover:text-warhammer-accent">
              <Heart />
            </Button>
            <Button variant="ghost" size="icon" className="text-warhammer-light hover:text-warhammer-accent">
              <User />
            </Button>
            <Link to="/admin/login">
              <Button variant="ghost" size="icon" title="Админ-панель" className="text-warhammer-light hover:text-warhammer-accent">
                <Settings />
              </Button>
            </Link>
            <Button className="bg-warhammer-primary hover:bg-warhammer-primary/80 text-white hidden sm:flex">
              Войти
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-warhammer-light hover:text-warhammer-accent">
              <Search />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden text-warhammer-light hover:text-warhammer-accent"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Menu />
            </Button>
          </div>
        </div>
      </div>
      
      {menuOpen && (
        <div className="absolute left-0 right-0 bg-warhammer-dark border-b border-warhammer-accent/30 py-6 z-20 shadow-lg">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-warhammer-accent font-heading text-lg mb-4">Фракции</h3>
              <ul className="space-y-2">
                {factions.map(faction => (
                  <li key={faction.id}>
                    <Link 
                      to={`/faction/${faction.slug}`} 
                      className="text-warhammer-light hover:text-warhammer-accent transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {faction.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-warhammer-accent font-heading text-lg mb-4">Серии книг</h3>
              <ul className="space-y-2">
                {series.map(s => (
                  <li key={s.id}>
                    <Link 
                      to={`/series/${s.slug}`} 
                      className="text-warhammer-light hover:text-warhammer-accent transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-warhammer-accent font-heading text-lg mb-4">Разделы</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="/new-releases" 
                    className="text-warhammer-light hover:text-warhammer-accent transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    Новые релизы
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/popular" 
                    className="text-warhammer-light hover:text-warhammer-accent transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    Популярное
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/horus-heresy" 
                    className="text-warhammer-light hover:text-warhammer-accent transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    Ересь Хоруса
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/authors" 
                    className="text-warhammer-light hover:text-warhammer-accent transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    Авторы
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default WarhammerHeader;
