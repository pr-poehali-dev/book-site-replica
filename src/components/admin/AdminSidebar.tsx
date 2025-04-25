
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, BookOpen, Users, 
  Tag, Settings, LogOut, List, 
  Headphones, BarChart3 
} from "lucide-react";
import { cn } from "@/lib/utils";

type NavItemProps = {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
};

const NavItem = ({ to, icon, label, isActive }: NavItemProps) => (
  <Link to={to}>
    <Button 
      variant={isActive ? "default" : "ghost"} 
      className={cn(
        "w-full justify-start",
        isActive ? "bg-primary text-primary-foreground" : "hover:bg-gray-100"
      )}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </Button>
  </Link>
);

const AdminSidebar = () => {
  const location = useLocation();
  const path = location.pathname;

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    // В реальном приложении здесь редирект на страницу входа
  };

  return (
    <div className="w-64 bg-white h-screen border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <Link to="/" className="flex items-center gap-2">
          <Headphones className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">АудиоКнига</span>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        <NavItem 
          to="/admin/dashboard" 
          icon={<LayoutDashboard className="h-5 w-5" />} 
          label="Панель управления" 
          isActive={path === "/admin/dashboard"} 
        />
        
        <NavItem 
          to="/admin/books" 
          icon={<BookOpen className="h-5 w-5" />} 
          label="Аудиокниги" 
          isActive={path.startsWith("/admin/books")} 
        />
        
        <NavItem 
          to="/admin/categories" 
          icon={<Tag className="h-5 w-5" />} 
          label="Категории" 
          isActive={path.startsWith("/admin/categories")} 
        />
        
        <NavItem 
          to="/admin/users" 
          icon={<Users className="h-5 w-5" />} 
          label="Пользователи" 
          isActive={path.startsWith("/admin/users")} 
        />
        
        <NavItem 
          to="/admin/series" 
          icon={<List className="h-5 w-5" />} 
          label="Серии книг" 
          isActive={path.startsWith("/admin/series")} 
        />
        
        <NavItem 
          to="/admin/stats" 
          icon={<BarChart3 className="h-5 w-5" />} 
          label="Статистика" 
          isActive={path.startsWith("/admin/stats")} 
        />
        
        <NavItem 
          to="/admin/settings" 
          icon={<Settings className="h-5 w-5" />} 
          label="Настройки" 
          isActive={path.startsWith("/admin/settings")} 
        />
      </div>

      <div className="p-3 border-t border-gray-200">
        <Button 
          variant="ghost" 
          className="w-full justify-start text-red-500 hover:text-red-700 hover:bg-red-50"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5" />
          <span className="ml-2">Выйти</span>
        </Button>
      </div>
    </div>
  );
};

export default AdminSidebar;
