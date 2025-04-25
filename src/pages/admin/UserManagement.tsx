
import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Search, User, Users, UserCheck, Activity } from 'lucide-react';

// Типы для пользователей
interface UserProps {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'inactive' | 'banned';
  subscription: 'free' | 'basic' | 'premium';
  joined: string;
  lastActive: string;
}

// Демо-данные пользователей
const mockUsers: UserProps[] = [
  {
    id: '1',
    name: 'Иванов Иван',
    email: 'ivan@example.com',
    status: 'active',
    subscription: 'premium',
    joined: '12 мая 2023',
    lastActive: '2 часа назад'
  },
  {
    id: '2',
    name: 'Петрова Мария',
    email: 'maria@example.com',
    status: 'active',
    subscription: 'basic',
    joined: '3 июня 2023',
    lastActive: '5 часов назад'
  },
  {
    id: '3',
    name: 'Сидоров Алексей',
    email: 'alexey@example.com',
    status: 'inactive',
    subscription: 'free',
    joined: '15 августа 2023',
    lastActive: '3 дня назад'
  },
  {
    id: '4',
    name: 'Смирнова Ольга',
    email: 'olga@example.com',
    status: 'banned',
    subscription: 'basic',
    joined: '27 марта 2023',
    lastActive: '2 недели назад'
  },
  {
    id: '5',
    name: 'Козлов Дмитрий',
    email: 'dmitry@example.com',
    status: 'active',
    subscription: 'premium',
    joined: '5 апреля 2023',
    lastActive: '1 день назад'
  },
];

// Компонент для просмотра детальной информации о пользователе
const UserDetailView = ({ user }: { user: UserProps }) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-center">
        <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center">
          <User className="h-12 w-12 text-gray-500" />
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="border-b pb-2">
          <p className="text-sm text-gray-500">Имя пользователя</p>
          <p className="font-medium">{user.name}</p>
        </div>
        
        <div className="border-b pb-2">
          <p className="text-sm text-gray-500">Email</p>
          <p className="font-medium">{user.email}</p>
        </div>
        
        <div className="border-b pb-2">
          <p className="text-sm text-gray-500">Статус</p>
          <Badge className={
            user.status === 'active' ? 'bg-green-100 text-green-800' : 
            user.status === 'inactive' ? 'bg-amber-100 text-amber-800' : 
            'bg-red-100 text-red-800'
          }>
            {user.status === 'active' ? 'Активен' : 
             user.status === 'inactive' ? 'Неактивен' : 'Заблокирован'}
          </Badge>
        </div>
        
        <div className="border-b pb-2">
          <p className="text-sm text-gray-500">Подписка</p>
          <Badge className={
            user.subscription === 'premium' ? 'bg-purple-100 text-purple-800' : 
            user.subscription === 'basic' ? 'bg-blue-100 text-blue-800' : 
            'bg-gray-100 text-gray-800'
          }>
            {user.subscription === 'premium' ? 'Премиум' : 
             user.subscription === 'basic' ? 'Базовая' : 'Бесплатная'}
          </Badge>
        </div>
        
        <div className="border-b pb-2">
          <p className="text-sm text-gray-500">Дата регистрации</p>
          <p className="font-medium">{user.joined}</p>
        </div>
        
        <div className="border-b pb-2">
          <p className="text-sm text-gray-500">Последняя активность</p>
          <p className="font-medium">{user.lastActive}</p>
        </div>
      </div>
    </div>
  );
};

const UserManagement = () => {
  const [search, setSearch] = useState('');
  const [selectedUser, setSelectedUser] = useState<UserProps | null>(null);
  
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
      <div className="grid gap-4 md:grid-cols-3 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Всего пользователей</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Users className="h-5 w-5 text-blue-500 mr-2" />
              <span className="text-2xl font-bold">{mockUsers.length}</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Активные подписки</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <UserCheck className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-2xl font-bold">
                {mockUsers.filter(u => u.status === 'active' && (u.subscription === 'basic' || u.subscription === 'premium')).length}
              </span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Новые регистрации</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Activity className="h-5 w-5 text-purple-500 mr-2" />
              <span className="text-2xl font-bold">12</span>
              <span className="text-xs text-green-500 ml-2">+3 за неделю</span>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-white rounded-lg border p-4 mb-6">
        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Поиск пользователей по имени или email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8"
            />
          </div>
          <Button variant="outline">Фильтры</Button>
          <Button>Добавить пользователя</Button>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Список пользователей</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Имя</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Подписка</TableHead>
                <TableHead>Зарегистрирован</TableHead>
                <TableHead className="text-right">Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Badge className={
                        user.status === 'active' ? 'bg-green-100 text-green-800' : 
                        user.status === 'inactive' ? 'bg-amber-100 text-amber-800' : 
                        'bg-red-100 text-red-800'
                      }>
                        {user.status === 'active' ? 'Активен' : 
                         user.status === 'inactive' ? 'Неактивен' : 'Заблокирован'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={
                        user.subscription === 'premium' ? 'bg-purple-100 text-purple-800' : 
                        user.subscription === 'basic' ? 'bg-blue-100 text-blue-800' : 
                        'bg-gray-100 text-gray-800'
                      }>
                        {user.subscription === 'premium' ? 'Премиум' : 
                         user.subscription === 'basic' ? 'Базовая' : 'Бесплатная'}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.joined}</TableCell>
                    <TableCell className="text-right">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="mr-2"
                            onClick={() => setSelectedUser(user)}
                          >
                            Просмотр
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Информация о пользователе</DialogTitle>
                          </DialogHeader>
                          {selectedUser && <UserDetailView user={selectedUser} />}
                        </DialogContent>
                      </Dialog>
                      
                      <Button 
                        variant={user.status === 'banned' ? 'outline' : 'destructive'} 
                        size="sm"
                        onClick={() => toggleUserStatus(user.id)}
                      >
                        {user.status === 'banned' ? 'Разблокировать' : 'Блокировать'}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-4 text-gray-500">
                    Пользователи не найдены
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </AdminLayout>
  );
};

export default UserManagement;
