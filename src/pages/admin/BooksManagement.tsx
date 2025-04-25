
import { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  status: "published" | "draft" | "processing";
  cover: string;
  dateAdded: string;
}

const mockBooks: Book[] = [
  {
    id: "1",
    title: "Гарри Поттер и философский камень",
    author: "Дж. К. Роулинг",
    category: "Фэнтези",
    status: "published",
    cover: "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    dateAdded: "2023-01-15"
  },
  {
    id: "2",
    title: "1984",
    author: "Джордж Оруэлл",
    category: "Антиутопия",
    status: "published",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    dateAdded: "2023-02-10"
  },
  {
    id: "3",
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    category: "Классика",
    status: "draft",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    dateAdded: "2023-03-05"
  },
  {
    id: "4",
    title: "Война и мир",
    author: "Лев Толстой",
    category: "Классика",
    status: "processing",
    cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    dateAdded: "2023-04-20"
  },
  {
    id: "5",
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    category: "Классика",
    status: "published",
    cover: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    dateAdded: "2023-05-12"
  }
];

const BooksManagement = () => {
  const [books, setBooks] = useState<Book[]>(mockBooks);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(mockBooks);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [currentBook, setCurrentBook] = useState<Book | null>(null);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    category: "",
    status: "draft" as "published" | "draft" | "processing",
    cover: ""
  });

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (!term) {
      setFilteredBooks(books);
      return;
    }

    const filtered = books.filter(
      book =>
        book.title.toLowerCase().includes(term.toLowerCase()) ||
        book.author.toLowerCase().includes(term.toLowerCase()) ||
        book.category.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  const handleFilterByStatus = (status: string) => {
    if (status === "all") {
      setFilteredBooks(books);
      return;
    }
    
    const filtered = books.filter(book => book.status === status);
    setFilteredBooks(filtered);
  };

  const handleAddBook = () => {
    const id = Math.random().toString(36).substring(2, 9);
    const dateAdded = new Date().toISOString().split("T")[0];
    
    const bookToAdd: Book = {
      id,
      ...newBook,
      dateAdded
    };
    
    setBooks([...books, bookToAdd]);
    setFilteredBooks([...books, bookToAdd]);
    setIsAddDialogOpen(false);
    setNewBook({
      title: "",
      author: "",
      category: "",
      status: "draft",
      cover: ""
    });
  };

  const handleEditBook = () => {
    if (!currentBook) return;
    
    const updatedBooks = books.map(book => 
      book.id === currentBook.id ? currentBook : book
    );
    
    setBooks(updatedBooks);
    setFilteredBooks(updatedBooks);
    setIsEditDialogOpen(false);
    setCurrentBook(null);
  };

  const handleDeleteBook = (id: string) => {
    const updatedBooks = books.filter(book => book.id !== id);
    setBooks(updatedBooks);
    setFilteredBooks(updatedBooks);
  };

  const openEditDialog = (book: Book) => {
    setCurrentBook(book);
    setIsEditDialogOpen(true);
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Управление книгами</h1>
          <Button onClick={() => setIsAddDialogOpen(true)}>Добавить книгу</Button>
        </div>

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
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
              <Select onValueChange={handleFilterByStatus} defaultValue="all">
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
              {filteredBooks.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-6 text-muted-foreground">
                    Книги не найдены
                  </TableCell>
                </TableRow>
              ) : (
                filteredBooks.map((book) => (
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
                          onClick={() => openEditDialog(book)}
                        >
                          Изменить
                        </Button>
                        <Button 
                          variant="destructive" 
                          size="sm"
                          onClick={() => handleDeleteBook(book.id)}
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
      </div>

      {/* Диалог добавления книги */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Добавить новую книгу</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Название
              </Label>
              <Input
                id="title"
                value={newBook.title}
                onChange={(e) => setNewBook({...newBook, title: e.target.value})}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="author" className="text-right">
                Автор
              </Label>
              <Input
                id="author"
                value={newBook.author}
                onChange={(e) => setNewBook({...newBook, author: e.target.value})}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Категория
              </Label>
              <Input
                id="category"
                value={newBook.category}
                onChange={(e) => setNewBook({...newBook, category: e.target.value})}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="status" className="text-right">
                Статус
              </Label>
              <Select 
                value={newBook.status}
                onValueChange={(value: "published" | "draft" | "processing") => 
                  setNewBook({...newBook, status: value})
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
              <Label htmlFor="cover" className="text-right">
                URL обложки
              </Label>
              <Input
                id="cover"
                value={newBook.cover}
                onChange={(e) => setNewBook({...newBook, cover: e.target.value})}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Отмена
            </Button>
            <Button onClick={handleAddBook}>Добавить</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Диалог редактирования книги */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Редактировать книгу</DialogTitle>
          </DialogHeader>
          {currentBook && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-title" className="text-right">
                  Название
                </Label>
                <Input
                  id="edit-title"
                  value={currentBook.title}
                  onChange={(e) => setCurrentBook({...currentBook, title: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-author" className="text-right">
                  Автор
                </Label>
                <Input
                  id="edit-author"
                  value={currentBook.author}
                  onChange={(e) => setCurrentBook({...currentBook, author: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-category" className="text-right">
                  Категория
                </Label>
                <Input
                  id="edit-category"
                  value={currentBook.category}
                  onChange={(e) => setCurrentBook({...currentBook, category: e.target.value})}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-status" className="text-right">
                  Статус
                </Label>
                <Select 
                  value={currentBook.status}
                  onValueChange={(value: "published" | "draft" | "processing") => 
                    setCurrentBook({...currentBook, status: value})
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
                <Label htmlFor="edit-cover" className="text-right">
                  URL обложки
                </Label>
                <Input
                  id="edit-cover"
                  value={currentBook.cover}
                  onChange={(e) => setCurrentBook({...currentBook, cover: e.target.value})}
                  className="col-span-3"
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Отмена
            </Button>
            <Button onClick={handleEditBook}>Сохранить</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default BooksManagement;
