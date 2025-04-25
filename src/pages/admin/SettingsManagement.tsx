
import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bell, User, Shield, Database, Volume2 } from 'lucide-react';

// Импорт компонентов настроек
import SettingsHeader from '@/components/admin/settings/SettingsHeader';
import GeneralSettings from '@/components/admin/settings/GeneralSettings';
import NotificationSettings from '@/components/admin/settings/NotificationSettings';
import SecuritySettings from '@/components/admin/settings/SecuritySettings';
import SystemSettings from '@/components/admin/settings/SystemSettings';
import PlayerSettings from '@/components/admin/settings/PlayerSettings';

const SettingsManagement = () => {
  // Состояния для всех настроек
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

  const handleResetSettings = () => {
    // Сброс настроек к значениям по умолчанию
    setNotificationEnabled(true);
    setEmailNotifications(true);
    setDarkMode(false);
    setAutoSave(true);
    setCacheEnabled(true);
    setLanguage('ru');
    setDefaultQuality('high');
    setVolumeLevel([75]);
  };

  return (
    <AdminLayout>
      <div className="container mx-auto p-6">
        <SettingsHeader 
          isLoading={isLoading} 
          onSave={handleSaveSettings}
          onReset={handleResetSettings}
        />

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
            <GeneralSettings 
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              language={language}
              setLanguage={setLanguage}
              autoSave={autoSave}
              setAutoSave={setAutoSave}
              cacheEnabled={cacheEnabled}
              setCacheEnabled={setCacheEnabled}
            />
          </TabsContent>

          <TabsContent value="notifications">
            <NotificationSettings 
              notificationEnabled={notificationEnabled}
              setNotificationEnabled={setNotificationEnabled}
              emailNotifications={emailNotifications}
              setEmailNotifications={setEmailNotifications}
            />
          </TabsContent>

          <TabsContent value="security">
            <SecuritySettings />
          </TabsContent>

          <TabsContent value="system">
            <SystemSettings />
          </TabsContent>

          <TabsContent value="player">
            <PlayerSettings 
              defaultQuality={defaultQuality}
              setDefaultQuality={setDefaultQuality}
              volumeLevel={volumeLevel}
              setVolumeLevel={setVolumeLevel}
            />
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default SettingsManagement;
