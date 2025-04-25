
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface UserSearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

const UserSearchBar = ({ search, setSearch }: UserSearchBarProps) => {
  return (
    <div className="bg-white rounded-lg border p-4 mb-6">
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Поиск пользователей по имени или email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-8"
          />
        </div>
        <Button variant="outline">Фильтры</Button>
        <Button>Добавить пользователя</Button>
      </div>
    </div>
  );
};

export default UserSearchBar;
