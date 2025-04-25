
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

const categoryData = [
  { name: 'Фантастика', прослушивания: 120 },
  { name: 'Детективы', прослушивания: 190 },
  { name: 'Романы', прослушивания: 300 },
  { name: 'Бизнес', прослушивания: 150 },
  { name: 'Саморазвитие', прослушивания: 200 },
  { name: 'История', прослушивания: 250 },
];

const CategoryListensChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Статистика прослушиваний</CardTitle>
        <CardDescription>
          Распределение прослушиваний по категориям
        </CardDescription>
      </CardHeader>
      <CardContent className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={categoryData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="прослушивания" name="Прослушивания" fill="#f43f5e" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default CategoryListensChart;
