
import { Button } from '@/components/ui/button';
import { RefreshCw, Save } from 'lucide-react';

interface SettingsHeaderProps {
  isLoading: boolean;
  onSave: () => void;
  onReset?: () => void;
}

const SettingsHeader = ({ isLoading, onSave, onReset }: SettingsHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">Настройки</h1>
      <div className="flex gap-2">
        <Button variant="outline" disabled={isLoading} onClick={onReset}>
          <RefreshCw className="mr-2 h-4 w-4" />
          Сбросить
        </Button>
        <Button onClick={onSave} disabled={isLoading}>
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
  );
};

export default SettingsHeader;
