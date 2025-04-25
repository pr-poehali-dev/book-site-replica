
import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WarhammerAdminSidebar from './WarhammerAdminSidebar';

type WarhammerAdminLayoutProps = {
  children: ReactNode;
  title: string;
};

const WarhammerAdminLayout = ({ children, title }: WarhammerAdminLayoutProps) => {
  const navigate = useNavigate();

  // Проверка аутентификации (для демо)
  useEffect(() => {
    const token = localStorage.getItem('warhammerAdminToken');
    if (!token) {
      navigate('/admin/login');
    }
  }, [navigate]);

  return (
    <div className="flex h-screen bg-warhammer-secondary">
      <WarhammerAdminSidebar />
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-heading font-bold text-warhammer-accent">{title}</h1>
          </div>
          <div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarhammerAdminLayout;
