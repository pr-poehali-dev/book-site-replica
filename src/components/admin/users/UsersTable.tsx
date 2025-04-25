
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import UserDetailView from './UserDetailView';
import { UserProps } from '@/types/userTypes';
import { useState } from 'react';

interface UsersTableProps {
  users: UserProps[];
  onToggleStatus: (userId: string) => void;
}

const UsersTable = ({ users, onToggleStatus }: UsersTableProps) => {
  const [selectedUser, setSelectedUser] = useState<UserProps | null>(null);

  return (
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
        {users.length > 0 ? (
          users.map((user) => (
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
                  onClick={() => onToggleStatus(user.id)}
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
  );
};

export default UsersTable;
