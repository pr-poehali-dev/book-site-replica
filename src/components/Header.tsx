
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Menu, Heart, Headphones, User, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2">
              <Headphones className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">АудиоКнига</span>
            </Link>
            <Button variant="ghost" className="hidden md:flex">
              <Menu className="mr-2" />
              Каталог
            </Button>
          </div>

          <div className="flex-1 max-w-xl mx-4 hidden md:block">
            <div className="relative">
              <Input
                type="search"
                placeholder="Поиск аудиокниг, авторов, исполнителей..."
                className="pl-10 pr-4"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Heart />
            </Button>
            <Button variant="ghost" size="icon">
              <User />
            </Button>
            <Link to="/admin/login">
              <Button variant="ghost" size="icon" title="Админ-панель">
                <Settings />
              </Button>
            </Link>
            <Button className="hidden sm:flex">
              Войти
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
