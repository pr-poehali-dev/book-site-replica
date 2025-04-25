
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';

const SystemSettings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Системные настройки</CardTitle>
        <CardDescription>
          Настройки производительности и системные параметры
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Интервал автосохранения (в секундах)</Label>
          <Input type="number" defaultValue="60" min="10" max="300" />
        </div>
        
        <div className="space-y-2">
          <Label>Путь для экспорта данных</Label>
          <Input defaultValue="/exports" />
        </div>
        
        <div className="space-y-2">
          <Label>Формат экспорта по умолчанию</Label>
          <Select defaultValue="xlsx">
            <SelectTrigger>
              <SelectValue placeholder="Выберите формат" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="xlsx">Excel (.xlsx)</SelectItem>
              <SelectItem value="csv">CSV (.csv)</SelectItem>
              <SelectItem value="json">JSON (.json)</SelectItem>
              <SelectItem value="pdf">PDF (.pdf)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium">Ведение журнала</h4>
            <p className="text-sm text-muted-foreground">
              Записывать все действия администраторов
            </p>
          </div>
          <Switch defaultChecked />
        </div>
      </CardContent>
    </Card>
  );
};

export default SystemSettings;
