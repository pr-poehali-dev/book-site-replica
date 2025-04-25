
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { BookOpen, Edit, Eye, Trash2 } from "lucide-react";
import { SeriesItemProps } from "@/types/seriesTypes";

interface SeriesTableProps {
  filteredSeries: SeriesItemProps[];
  onDelete: (id: number) => void;
  onEdit: (series: SeriesItemProps) => void;
  onView: (series: SeriesItemProps) => void;
}

const SeriesTable = ({ filteredSeries, onDelete, onEdit, onView }: SeriesTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Название</TableHead>
          <TableHead>Автор</TableHead>
          <TableHead>Жанр</TableHead>
          <TableHead>Книг в серии</TableHead>
          <TableHead className="text-right">Действия</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredSeries.length > 0 ? (
          filteredSeries.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.author}</TableCell>
              <TableCell>{item.genre}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2 text-gray-500" />
                  {item.booksCount}
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end space-x-2">
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => onView(item)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => onEdit(item)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="text-red-500 hover:text-red-700"
                    onClick={() => onDelete(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={5} className="h-24 text-center">
              Серии не найдены
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default SeriesTable;
