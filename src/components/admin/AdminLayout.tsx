
import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

type AdminLayoutProps = {
  children: ReactNode;
  title: string;
};

const AdminLayout = ({ children, title }: AdminLayoutProps) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Проверка аутентификации
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('adminToken');
      
      // Для демо: принимаем любой токен как валидный
      if (token) {
        setIsAuthenticated(true);
      } else {
        navigate('/admin/login');
      }
      setIsLoading(false);
    };
    
    checkAuth();
  }, [navigate]);

  // Показываем загрузку пока проверяем аутентификацию
  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="h-16 w-16 mx-auto border-4 border-t-primary border-gray-200 rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600">Загрузка...</p>
        </div>
      </div>
    );
  }

  // Если аутентифицированы, показываем контент
  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">{title}</h1>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
