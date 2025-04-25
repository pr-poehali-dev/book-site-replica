
import { Book } from "@/types/bookTypes";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface BookFormFieldsProps {
  book: Partial<Book>;
  onBookChange: (updatedBook: Partial<Book>) => void;
  isNew?: boolean;
}

const BookFormFields = ({ book, onBookChange, isNew = false }: BookFormFieldsProps) => {
  const idPrefix = isNew ? '' : 'edit-';

  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor={`${idPrefix}title`} className="text-right">
          Название
        </Label>
        <Input
          id={`${idPrefix}title`}
          value={book.title || ''}
          onChange={(e) => onBookChange({...book, title: e.target.value})}
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor={`${idPrefix}author`} className="text-right">
          Автор
        </Label>
        <Input
          id={`${idPrefix}author`}
          value={book.author || ''}
          onChange={(e) => onBookChange({...book, author: e.target.value})}
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor={`${idPrefix}category`} className="text-right">
          Категория
        </Label>
        <Input
          id={`${idPrefix}category`}
          value={book.category || ''}
          onChange={(e) => onBookChange({...book, category: e.target.value})}
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor={`${idPrefix}status`} className="text-right">
          Статус
        </Label>
        <Select 
          value={book.status}
          onValueChange={(value: "published" | "draft" | "processing") => 
            onBookChange({...book, status: value})
          }
        >
          <SelectTrigger className="col-span-3">
            <SelectValue placeholder="Выберите статус" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="published">Опубликовано</SelectItem>
            <SelectItem value="draft">Черновик</SelectItem>
            <SelectItem value="processing">В обработке</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor={`${idPrefix}cover`} className="text-right">
          URL обложки
        </Label>
        <Input
          id={`${idPrefix}cover`}
          value={book.cover || ''}
          onChange={(e) => onBookChange({...book, cover: e.target.value})}
          className="col-span-3"
        />
      </div>
    </div>
  );
};

export default BookFormFields;
