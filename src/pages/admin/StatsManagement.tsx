
import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Users, Headphones, Calendar } from 'lucide-react';

// Импорт компонентов
import StatsCard from '@/components/admin/dashboard/StatsCard';
import UsersActivityChart from '@/components/admin/dashboard/UsersActivityChart';
import CategoryListensChart from '@/components/admin/dashboard/CategoryListensChart';
import GenreTrendsChart from '@/components/admin/dashboard/GenreTrendsChart';
import StatsHeader from '@/components/admin/dashboard/StatsHeader';

const StatsManagement = () => {
  const [period, setPeriod] = useState('month');

  return (
    <AdminLayout title="Статистика">
      <div className="space-y-6">
        <StatsHeader period={period} setPeriod={setPeriod} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard 
            title="Аудиокниги" 
            value="1,245" 
            description="+15% с прошлого месяца" 
            trend="up"
            icon={<BookOpen className="h-5 w-5 text-gray-600" />} 
          />
          <StatsCard 
            title="Пользователи" 
            value="5,678" 
            description="+23% с прошлого месяца" 
            trend="up"
            icon={<Users className="h-5 w-5 text-gray-600" />} 
          />
          <StatsCard 
            title="Прослушивания" 
            value="28,459" 
            description="+8% с прошлого месяца" 
            trend="up"
            icon={<Headphones className="h-5 w-5 text-gray-600" />} 
          />
          <StatsCard 
            title="Новые релизы" 
            value="43" 
            description="-3% с прошлого месяца" 
            trend="down"
            icon={<Calendar className="h-5 w-5 text-gray-600" />} 
          />
        </div>

        <Tabs defaultValue="users" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="users">Пользователи</TabsTrigger>
            <TabsTrigger value="listens">Прослушивания</TabsTrigger>
            <TabsTrigger value="trends">Тенденции</TabsTrigger>
          </TabsList>
          
          <TabsContent value="users">
            <UsersActivityChart />
          </TabsContent>
          
          <TabsContent value="listens">
            <CategoryListensChart />
          </TabsContent>
          
          <TabsContent value="trends">
            <GenreTrendsChart />
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default StatsManagement;
