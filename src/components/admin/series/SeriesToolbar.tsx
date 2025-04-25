
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";

interface SeriesToolbarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onAddClick: () => void;
}

const SeriesToolbar = ({ searchTerm, onSearchChange, onAddClick }: SeriesToolbarProps) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="relative w-72">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Поиск по названию, автору, жанру..."
          className="pl-9"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      
      <Button className="flex items-center" onClick={onAddClick}>
        <Plus className="h-4 w-4 mr-2" />
        Добавить серию
      </Button>
    </div>
  );
};

export default SeriesToolbar;
