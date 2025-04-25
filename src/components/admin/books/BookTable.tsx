
import { Book } from "@/types/bookTypes";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface BookTableProps {
  books: Book[];
  onEditBook: (book: Book) => void;
  onDeleteBook: (id: string) => void;
}

const BookTable = ({ books, onEditBook, onDeleteBook }: BookTableProps) => {
  return (
    <div className="bg-white rounded-md shadow">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">Обложка</TableHead>
            <TableHead>Название</TableHead>
            <TableHead>Автор</TableHead>
            <TableHead>Категория</TableHead>
            <TableHead>Статус</TableHead>
            <TableHead>Дата добавления</TableHead>
            <TableHead className="text-right">Действия</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {books.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-6 text-muted-foreground">
                Книги не найдены
              </TableCell>
            </TableRow>
          ) : (
            books.map((book) => (
              <TableRow key={book.id}>
                <TableCell>
                  <img 
                    src={book.cover} 
                    alt={`Обложка ${book.title}`} 
                    className="w-12 h-16 object-cover rounded"
                  />
                </TableCell>
                <TableCell className="font-medium">{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.category}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    book.status === 'published' ? 'bg-green-100 text-green-800' :
                    book.status === 'draft' ? 'bg-gray-100 text-gray-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {book.status === 'published' ? 'Опубликовано' :
                     book.status === 'draft' ? 'Черновик' : 'В обработке'}
                  </span>
                </TableCell>
                <TableCell>{book.dateAdded}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => onEditBook(book)}
                    >
                      Изменить
                    </Button>
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => onDeleteBook(book.id)}
                    >
                      Удалить
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default BookTable;
