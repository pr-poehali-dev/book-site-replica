
import { User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { UserProps } from '@/types/userTypes';

interface UserDetailViewProps {
  user: UserProps;
}

const UserDetailView = ({ user }: UserDetailViewProps) => {
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

export default UserDetailView;
