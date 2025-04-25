
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';

interface PlayerSettingsProps {
  defaultQuality: string;
  setDefaultQuality: (value: string) => void;
  volumeLevel: number[];
  setVolumeLevel: (value: number[]) => void;
}

const PlayerSettings = ({
  defaultQuality,
  setDefaultQuality,
  volumeLevel,
  setVolumeLevel
}: PlayerSettingsProps) => {
  return (
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
          <Label>Громкость по умолчанию ({volumeLevel[0]}%)</Label>
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
  );
};

export default PlayerSettings;
