
import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart3, Download, BookOpen, Users, Headphones, Calendar } from 'lucide-react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  BarElement,
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

// Регистрация необходимых компонентов для Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StatsManagement = () => {
  const [period, setPeriod] = useState('month');

  // Опции для графика пользователей
  const userChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Активность пользователей',
      },
    },
  };

  // Данные для графика пользователей
  const userChartData = {
    labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь'],
    datasets: [
      {
        label: 'Новые пользователи',
        data: [65, 59, 80, 81, 56, 89],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Активные пользователи',
        data: [28, 48, 40, 19, 86, 27],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Опции для графика прослушиваний
  const listensChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Прослушивания по категориям',
      },
    },
  };

  // Данные для графика прослушиваний
  const listensChartData = {
    labels: ['Фантастика', 'Детективы', 'Романы', 'Бизнес', 'Саморазвитие', 'История'],
    datasets: [
      {
        label: 'Прослушивания',
        data: [120, 190, 300, 150, 200, 250],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

  // Данные для графика тенденций
  const trendsLineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Тенденции популярности жанров',
      },
    },
  };

  const trendsLineData = {
    labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь'],
    datasets: [
      {
        label: 'Фантастика',
        data: [30, 40, 45, 50, 49, 60],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Детективы',
        data: [50, 45, 55, 42, 43, 40],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Бизнес',
        data: [20, 25, 30, 45, 55, 60],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };

  return (
    <AdminLayout title="Статистика">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-medium">Аналитика и статистика платформы</h2>
            <p className="text-sm text-gray-500">Детальный обзор показателей и тенденций</p>
          </div>
          <div className="flex items-center gap-3">
            <Select value={period} onValueChange={setPeriod}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Период" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">Неделя</SelectItem>
                <SelectItem value="month">Месяц</SelectItem>
                <SelectItem value="quarter">Квартал</SelectItem>
                <SelectItem value="year">Год</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="flex items-center gap-1">
              <Download className="h-4 w-4" />
              Экспорт
            </Button>
          </div>
        </div>

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
            <Card>
              <CardHeader>
                <CardTitle>Активность пользователей</CardTitle>
                <CardDescription>
                  Статистика новых и активных пользователей платформы
                </CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <Bar options={userChartOptions} data={userChartData} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="listens">
            <Card>
              <CardHeader>
                <CardTitle>Статистика прослушиваний</CardTitle>
                <CardDescription>
                  Распределение прослушиваний по категориям
                </CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <Bar options={listensChartOptions} data={listensChartData} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="trends">
            <Card>
              <CardHeader>
                <CardTitle>Тенденции популярности</CardTitle>
                <CardDescription>
                  Изменение популярности жанров со временем
                </CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <Line options={trendsLineOptions} data={trendsLineData} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

// Компонент карточки статистики
interface StatsCardProps {
  title: string;
  value: string;
  description: string;
  trend: 'up' | 'down';
  icon: React.ReactNode;
}

const StatsCard = ({ title, value, description, trend, icon }: StatsCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
          <div className="bg-gray-100 p-2 rounded-full">{icon}</div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className={`text-xs ${trend === 'up' ? 'text-green-600' : 'text-red-600'} mt-1`}>
          {description}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsManagement;
