
import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';

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

export default StatsCard;
