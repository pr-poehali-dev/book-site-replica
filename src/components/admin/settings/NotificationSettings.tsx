
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface NotificationSettingsProps {
  notificationEnabled: boolean;
  setNotificationEnabled: (value: boolean) => void;
  emailNotifications: boolean;
  setEmailNotifications: (value: boolean) => void;
}

const NotificationSettings = ({
  notificationEnabled,
  setNotificationEnabled,
  emailNotifications,
  setEmailNotifications,
}: NotificationSettingsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Настройки уведомлений</CardTitle>
        <CardDescription>
          Настройте параметры уведомлений системы
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium">Включить уведомления</h4>
            <p className="text-sm text-muted-foreground">
              Получать уведомления о событиях системы
            </p>
          </div>
          <Switch 
            checked={notificationEnabled}
            onCheckedChange={setNotificationEnabled}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium">Email-уведомления</h4>
            <p className="text-sm text-muted-foreground">
              Получать уведомления на электронную почту
            </p>
          </div>
          <Switch 
            checked={emailNotifications}
            onCheckedChange={setEmailNotifications}
            disabled={!notificationEnabled}
          />
        </div>
        
        <div className="space-y-2">
          <Label>Email для уведомлений</Label>
          <Input 
            type="email" 
            placeholder="admin@audiokniga.ru" 
            disabled={!notificationEnabled || !emailNotifications}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationSettings;
