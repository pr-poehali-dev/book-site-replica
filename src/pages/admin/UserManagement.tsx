
import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import UserStats from '@/components/admin/users/UserStats';
import UserSearchBar from '@/components/admin/users/UserSearchBar';
import UsersTable from '@/components/admin/users/UsersTable';
import { mockUsers } from '@/types/userTypes';

const UserManagement = () => {
  const [search, setSearch] = useState('');
  
  // Фильтрация пользователей по поисковому запросу
  const filteredUsers = mockUsers.filter(user => 
    user.name.toLowerCase().includes(search.toLowerCase()) || 
    user.email.toLowerCase().includes(search.toLowerCase())
  );
  
  // Обработчик для блокировки/разблокировки пользователя
  const toggleUserStatus = (userId: string) => {
    console.log('Переключение статуса пользователя с ID:', userId);
    // В реальном приложении здесь был бы API-запрос для изменения статуса
  };

  return (
    <AdminLayout title="Управление пользователями">
      {/* Блок статистики */}
      <UserStats users={mockUsers} />
      
      {/* Панель поиска */}
      <UserSearchBar search={search} setSearch={setSearch} />
      
      {/* Таблица пользователей */}
      <Card>
        <CardHeader>
          <CardTitle>Список пользователей</CardTitle>
        </CardHeader>
        <CardContent>
          <UsersTable 
            users={filteredUsers} 
            onToggleStatus={toggleUserStatus} 
          />
        </CardContent>
      </Card>
    </AdminLayout>
  );
};

export default UserManagement;
