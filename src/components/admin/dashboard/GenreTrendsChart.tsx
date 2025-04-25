
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
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from 'recharts';

const trendsData = [
  { name: 'Январь', фантастика: 30, детективы: 50, бизнес: 20 },
  { name: 'Февраль', фантастика: 40, детективы: 45, бизнес: 25 },
  { name: 'Март', фантастика: 45, детективы: 55, бизнес: 30 },
  { name: 'Апрель', фантастика: 50, детективы: 42, бизнес: 45 },
  { name: 'Май', фантастика: 49, детективы: 43, бизнес: 55 },
  { name: 'Июнь', фантастика: 60, детективы: 40, бизнес: 60 },
];

const GenreTrendsChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Тенденции популярности</CardTitle>
        <CardDescription>
          Изменение популярности жанров со временем
        </CardDescription>
      </CardHeader>
      <CardContent className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={trendsData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="фантастика" 
              name="Фантастика" 
              stroke="#f43f5e" 
              activeDot={{ r: 8 }} 
            />
            <Line 
              type="monotone" 
              dataKey="детективы" 
              name="Детективы" 
              stroke="#0ea5e9" 
            />
            <Line 
              type="monotone" 
              dataKey="бизнес" 
              name="Бизнес" 
              stroke="#10b981" 
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default GenreTrendsChart;
