
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, UserCheck, Activity } from 'lucide-react';
import { UserProps } from '@/types/userTypes';

interface UserStatsProps {
  users: UserProps[];
}

const UserStats = ({ users }: UserStatsProps) => {
  // Активные подписки (активные пользователи с базовой или премиум подпиской)
  const activeSubscriptions = users.filter(
    u => u.status === 'active' && (u.subscription === 'basic' || u.subscription === 'premium')
  ).length;

  return (
    <div className="grid gap-4 md:grid-cols-3 mb-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Всего пользователей</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <Users className="h-5 w-5 text-blue-500 mr-2" />
            <span className="text-2xl font-bold">{users.length}</span>
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
            <span className="text-2xl font-bold">{activeSubscriptions}</span>
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
  );
};

export default UserStats;
