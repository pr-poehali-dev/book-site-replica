
import React from 'react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from '@/components/ui/card';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from 'recharts';

const userData = [
  { name: 'Январь', новые: 65, активные: 28 },
  { name: 'Февраль', новые: 59, активные: 48 },
  { name: 'Март', новые: 80, активные: 40 },
  { name: 'Апрель', новые: 81, активные: 19 },
  { name: 'Май', новые: 56, активные: 86 },
  { name: 'Июнь', новые: 89, активные: 27 },
];

const UsersActivityChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Активность пользователей</CardTitle>
        <CardDescription>
          Статистика новых и активных пользователей платформы
        </CardDescription>
      </CardHeader>
      <CardContent className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={userData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="новые" name="Новые пользователи" fill="#4ade80" />
            <Bar dataKey="активные" name="Активные пользователи" fill="#a78bfa" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default UsersActivityChart;
