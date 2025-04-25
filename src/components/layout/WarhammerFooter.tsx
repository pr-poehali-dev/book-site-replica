
import { Link } from "react-router-dom";
import WarhammerLogo from "../WarhammerLogo";
import { factions, series } from "@/data/warhammer40kData";

const WarhammerFooter = () => {
  return (
    <footer className="bg-warhammer-dark text-warhammer-light border-t border-warhammer-accent/30 relative">
      <div className="absolute inset-0 aquila-pattern"></div>
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <WarhammerLogo className="h-12 w-auto mb-4" />
            <p className="text-warhammer-light/70 text-sm mb-4">
              Лучшая библиотека аудиокниг вселенной Warhammer 40,000 с профессиональным озвучиванием.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-warhammer-accent hover:text-warhammer-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="text-warhammer-accent hover:text-warhammer-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="text-warhammer-accent hover:text-warhammer-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="text-warhammer-accent hover:text-warhammer-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-warhammer-accent font-heading text-lg mb-4">Разделы сайта</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-warhammer-light/70 hover:text-warhammer-accent transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/new-releases" className="text-warhammer-light/70 hover:text-warhammer-accent transition-colors">
                  Новые релизы
                </Link>
              </li>
              <li>
                <Link to="/popular" className="text-warhammer-light/70 hover:text-warhammer-accent transition-colors">
                  Популярное
                </Link>
              </li>
              <li>
                <Link to="/authors" className="text-warhammer-light/70 hover:text-warhammer-accent transition-colors">
                  Авторы
                </Link>
              </li>
              <li>
                <Link to="/narrators" className="text-warhammer-light/70 hover:text-warhammer-accent transition-colors">
                  Исполнители
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-warhammer-accent font-heading text-lg mb-4">Фракции</h3>
            <ul className="space-y-2">
              {factions.slice(0, 5).map(faction => (
                <li key={faction.id}>
                  <Link to={`/faction/${faction.slug}`} className="text-warhammer-light/70 hover:text-warhammer-accent transition-colors">
                    {faction.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-warhammer-accent font-heading text-lg mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-warhammer-light/70 hover:text-warhammer-accent transition-colors">
                  О проекте
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-warhammer-light/70 hover:text-warhammer-accent transition-colors">
                  Контакты
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-warhammer-light/70 hover:text-warhammer-accent transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-warhammer-light/70 hover:text-warhammer-accent transition-colors">
                  Условия использования
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-warhammer-light/70 hover:text-warhammer-accent transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-warhammer-accent/20 mt-8 pt-8 text-center text-warhammer-light/50 text-sm">
          <p>© 2023 Warhammer 40K Audio Library. Все права защищены.</p>
          <p className="mt-2">Warhammer 40,000 и все связанные с ним материалы являются собственностью Games Workshop Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default WarhammerFooter;
