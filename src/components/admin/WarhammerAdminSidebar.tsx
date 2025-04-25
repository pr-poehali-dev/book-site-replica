
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  ListTodo, 
  Users, 
  Library, 
  BarChart3, 
  Settings, 
  LogOut 
} from 'lucide-react';
import WarhammerLogo from '../WarhammerLogo';
import { Button } from '../ui/button';

const WarhammerAdminSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const handleLogout = () => {
    localStorage.removeItem('warhammerAdminToken');
    navigate('/admin/login');
  };

  return (
    <div className="w-64 h-full bg-warhammer-dark border-r border-warhammer-accent/20 flex flex-col">
      <div className="p-4 border-b border-warhammer-accent/20">
        <Link to="/admin/dashboard" className="flex items-center justify-center">
          <WarhammerLogo className="h-10 w-auto" />
        </Link>
        <div className="text-warhammer-accent text-center mt-1 text-xs font-heading">
          АДМИН-ПАНЕЛЬ
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        <Link 
          to="/admin/dashboard" 
          className={`flex items-center p-3 rounded-md hover:bg-warhammer-primary/10 ${
            isActive('/admin/dashboard') ? 'bg-warhammer-primary/10 text-warhammer-primary' : 'text-warhammer-light/70'
          }`}
        >
          <LayoutDashboard className="h-5 w-5 mr-3" />
          Панель управления
        </Link>
        
        <Link 
          to="/admin/books" 
          className={`flex items-center p-3 rounded-md hover:bg-warhammer-primary/10 ${
            isActive('/admin/books') ? 'bg-warhammer-primary/10 text-warhammer-primary' : 'text-warhammer-light/70'
          }`}
        >
          <BookOpen className="h-5 w-5 mr-3" />
          Аудиокниги
        </Link>
        
        <Link 
          to="/admin/categories" 
          className={`flex items-center p-3 rounded-md hover:bg-warhammer-primary/10 ${
            isActive('/admin/categories') ? 'bg-warhammer-primary/10 text-warhammer-primary' : 'text-warhammer-light/70'
          }`}
        >
          <ListTodo className="h-5 w-5 mr-3" />
          Категории
        </Link>
        
        <Link 
          to="/admin/users" 
          className={`flex items-center p-3 rounded-md hover:bg-warhammer-primary/10 ${
            isActive('/admin/users') ? 'bg-warhammer-primary/10 text-warhammer-primary' : 'text-warhammer-light/70'
          }`}
        >
          <Users className="h-5 w-5 mr-3" />
          Пользователи
        </Link>
        
        <Link 
          to="/admin/series" 
          className={`flex items-center p-3 rounded-md hover:bg-warhammer-primary/10 ${
            isActive('/admin/series') ? 'bg-warhammer-primary/10 text-warhammer-primary' : 'text-warhammer-light/70'
          }`}
        >
          <Library className="h-5 w-5 mr-3" />
          Серии книг
        </Link>
        
        <Link 
          to="/admin/statistics" 
          className={`flex items-center p-3 rounded-md hover:bg-warhammer-primary/10 ${
            isActive('/admin/statistics') ? 'bg-warhammer-primary/10 text-warhammer-primary' : 'text-warhammer-light/70'
          }`}
        >
          <BarChart3 className="h-5 w-5 mr-3" />
          Статистика
        </Link>
        
        <Link 
          to="/admin/settings" 
          className={`flex items-center p-3 rounded-md hover:bg-warhammer-primary/10 ${
            isActive('/admin/settings') ? 'bg-warhammer-primary/10 text-warhammer-primary' : 'text-warhammer-light/70'
          }`}
        >
          <Settings className="h-5 w-5 mr-3" />
          Настройки
        </Link>
      </nav>
      
      <div className="p-4 border-t border-warhammer-accent/20">
        <Button 
          variant="ghost" 
          className="w-full flex items-center justify-center text-warhammer-light/70 hover:text-warhammer-primary hover:bg-warhammer-primary/10"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5 mr-2" />
          Выйти
        </Button>
      </div>
    </div>
  );
};

export default WarhammerAdminSidebar;
