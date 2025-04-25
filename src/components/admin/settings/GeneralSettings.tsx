
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface GeneralSettingsProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  language: string;
  setLanguage: (value: string) => void;
  autoSave: boolean;
  setAutoSave: (value: boolean) => void;
  cacheEnabled: boolean;
  setCacheEnabled: (value: boolean) => void;
}

const GeneralSettings = ({
  darkMode,
  setDarkMode,
  language,
  setLanguage,
  autoSave,
  setAutoSave,
  cacheEnabled,
  setCacheEnabled,
}: GeneralSettingsProps) => {
  return (
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
  );
};

export default GeneralSettings;
