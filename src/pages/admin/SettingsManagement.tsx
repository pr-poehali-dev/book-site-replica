
import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { Save, RefreshCw, Bell, User, Shield, Database, Volume2 } from 'lucide-react';

const SettingsManagement = () => {
  const [notificationEnabled, setNotificationEnabled] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  const [cacheEnabled, setCacheEnabled] = useState(true);
  const [language, setLanguage] = useState('ru');
  const [defaultQuality, setDefaultQuality] = useState('high');
  const [volumeLevel, setVolumeLevel] = useState([75]);
  
  const [isLoading, setIsLoading] = useState(false);

  const handleSaveSettings = () => {
    setIsLoading(true);
    // Имитация сохранения настроек
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <AdminLayout>
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Настройки</h1>
          <div className="flex gap-2">
            <Button variant="outline" disabled={isLoading}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Сбросить
            </Button>
            <Button onClick={handleSaveSettings} disabled={isLoading}>
              {isLoading ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Сохранение...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Сохранить изменения
                </>
              )}
            </Button>
          </div>
        </div>

        <Tabs defaultValue="general">
          <TabsList className="mb-6">
            <TabsTrigger value="general" className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              Общие
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center">
              <Bell className="mr-2 h-4 w-4" />
              Уведомления
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center">
              <Shield className="mr-2 h-4 w-4" />
              Безопасность
            </TabsTrigger>
            <TabsTrigger value="system" className="flex items-center">
              <Database className="mr-2 h-4 w-4" />
              Система
            </TabsTrigger>
            <TabsTrigger value="player" className="flex items-center">
              <Volume2 className="mr-2 h-4 w-4" />
              Аудиоплеер
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Интерфейс</CardTitle>
                  <CardDescription>
                    Настройте внешний вид и поведение интерфейса
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Темная тема</h4>
                      <p className="text-sm text-muted-foreground">
                        Включить темный режим интерфейса
                      </p>
                    </div>
                    <Switch 
                      checked={darkMode}
                      onCheckedChange={setDarkMode}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Язык интерфейса</Label>
                    <Select value={language} onValueChange={setLanguage}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите язык" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ru">Русский</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Español</SelectItem>
                        <SelectItem value="de">Deutsch</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Автосохранение</h4>
                      <p className="text-sm text-muted-foreground">
                        Автоматически сохранять изменения
                      </p>
                    </div>
                    <Switch 
                      checked={autoSave}
                      onCheckedChange={setAutoSave}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Контент</CardTitle>
                  <CardDescription>
                    Настройте отображение контента на странице
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Количество элементов на странице</Label>
                    <Select defaultValue="20">
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите количество" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="20">20</SelectItem>
                        <SelectItem value="50">50</SelectItem>
                        <SelectItem value="100">100</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Стиль отображения таблиц</Label>
                    <RadioGroup defaultValue="compact">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="compact" id="compact" />
                        <Label htmlFor="compact">Компактный</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="comfortable" id="comfortable" />
                        <Label htmlFor="comfortable">Комфортный</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Кэширование данных</h4>
                      <p className="text-sm text-muted-foreground">
                        Ускоряет загрузку страниц
                      </p>
                    </div>
                    <Switch 
                      checked={cacheEnabled}
                      onCheckedChange={setCacheEnabled}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="notifications">
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
          </TabsContent>

          <TabsContent value="security">
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
          </TabsContent>

          <TabsContent value="system">
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
          </TabsContent>

          <TabsContent value="player">
            <Card>
              <CardHeader>
                <CardTitle>Настройки аудиоплеера</CardTitle>
                <CardDescription>
                  Настройки воспроизведения аудиокниг
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Качество аудио по умолчанию</Label>
                  <Select value={defaultQuality} onValueChange={setDefaultQuality}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите качество" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Низкое (64 kbps)</SelectItem>
                      <SelectItem value="medium">Среднее (128 kbps)</SelectItem>
                      <SelectItem value="high">Высокое (256 kbps)</SelectItem>
                      <SelectItem value="hd">HD (320 kbps)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Громкость по умолчанию ({volumeLevel}%)</Label>
                  <Slider 
                    value={volumeLevel} 
                    onValueChange={setVolumeLevel} 
                    max={100} 
                    step={1}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Скорость воспроизведения по умолчанию</Label>
                  <Select defaultValue="1">
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите скорость" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0.5">0.5x</SelectItem>
                      <SelectItem value="0.75">0.75x</SelectItem>
                      <SelectItem value="1">1.0x</SelectItem>
                      <SelectItem value="1.25">1.25x</SelectItem>
                      <SelectItem value="1.5">1.5x</SelectItem>
                      <SelectItem value="2">2.0x</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Автовоспроизведение</h4>
                    <p className="text-sm text-muted-foreground">
                      Автоматически продолжать воспроизведение следующего трека
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default SettingsManagement;
