
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Download } from 'lucide-react';

interface StatsHeaderProps {
  period: string;
  setPeriod: (value: string) => void;
}

const StatsHeader = ({ period, setPeriod }: StatsHeaderProps) => {
  return (
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
  );
};

export default StatsHeader;
