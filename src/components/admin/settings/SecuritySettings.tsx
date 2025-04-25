
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const SecuritySettings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Настройки безопасности</CardTitle>
        <CardDescription>
          Управление доступом и безопасностью аккаунта
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Текущий пароль</Label>
          <Input type="password" />
        </div>
        
        <div className="space-y-2">
          <Label>Новый пароль</Label>
          <Input type="password" />
        </div>
        
        <div className="space-y-2">
          <Label>Подтверждение пароля</Label>
          <Input type="password" />
        </div>
        
        <div className="pt-2">
          <Button>Сменить пароль</Button>
        </div>
        
        <div className="space-y-2 pt-4">
          <Label>Двухфакторная аутентификация</Label>
          <Select defaultValue="disabled">
            <SelectTrigger>
              <SelectValue placeholder="Статус" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="disabled">Отключена</SelectItem>
              <SelectItem value="sms">SMS</SelectItem>
              <SelectItem value="app">Приложение аутентификации</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default SecuritySettings;
