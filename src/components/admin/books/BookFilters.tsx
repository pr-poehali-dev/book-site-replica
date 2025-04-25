
import { Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface BookFiltersProps {
  searchTerm: string;
  onSearch: (term: string) => void;
  onFilterByStatus: (status: string) => void;
}

const BookFilters = ({ searchTerm, onSearch, onFilterByStatus }: BookFiltersProps) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Фильтры</CardTitle>
        <CardDescription>Найдите и отфильтруйте книги в каталоге</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Поиск по названию, автору или категории..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
          <Select onValueChange={onFilterByStatus} defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Статус" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все</SelectItem>
              <SelectItem value="published">Опубликовано</SelectItem>
              <SelectItem value="draft">Черновик</SelectItem>
              <SelectItem value="processing">В обработке</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookFilters;
