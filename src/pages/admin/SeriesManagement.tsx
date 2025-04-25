
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Eye, 
  BookOpen 
} from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";

// Имитация данных о сериях книг
const mockSeries = [
  { 
    id: 1, 
    name: "Гарри Поттер", 
    author: "Дж. К. Роулинг", 
    booksCount: 7, 
    genre: "Фэнтези",
    description: "Серия романов о мальчике-волшебнике и его приключениях в мире магии."
  },
  { 
    id: 2, 
    name: "Шерлок Холмс", 
    author: "Артур Конан Дойл", 
    booksCount: 4, 
    genre: "Детектив",
    description: "Серия рассказов о легендарном лондонском детективе и его помощнике докторе Ватсоне."
  },
  { 
    id: 3, 
    name: "Властелин колец", 
    author: "Дж. Р. Р. Толкин", 
    booksCount: 3, 
    genre: "Фэнтези",
    description: "Эпическая трилогия о приключениях Фродо Бэггинса и его спутников."
  },
  { 
    id: 4, 
    name: "Песнь Льда и Пламени", 
    author: "Джордж Р. Р. Мартин", 
    booksCount: 5, 
    genre: "Фэнтези",
    description: "Серия книг, на основе которой создан сериал \"Игра престолов\"."
  },
  { 
    id: 5, 
    name: "Метро 2033", 
    author: "Дмитрий Глуховский", 
    booksCount: 3, 
    genre: "Постапокалипсис",
    description: "Серия книг о жизни людей в московском метро после ядерной войны."
  },
];

interface SeriesItemProps {
  id: number;
  name: string;
  author: string;
  booksCount: number;
  genre: string;
  description: string;
}

const SeriesManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [series, setSeries] = useState<SeriesItemProps[]>(mockSeries);

  // Фильтрация серий по поисковому запросу
  const filteredSeries = series.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Имитация удаления серии
  const handleDelete = (id: number) => {
    setSeries(series.filter(item => item.id !== id));
  };

  return (
    <AdminLayout title="Управление сериями книг">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Серии книг</CardTitle>
          <CardDescription>
            Управляйте сериями аудиокниг, добавляйте новые или редактируйте существующие
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="relative w-72">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Поиск по названию, автору, жанру..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex items-center">
                  <Plus className="h-4 w-4 mr-2" />
                  Добавить серию
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Добавить новую серию</DialogTitle>
                  <DialogDescription>
                    Заполните информацию о серии книг для добавления в каталог
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Название серии</label>
                    <Input id="name" placeholder="Введите название серии" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="author" className="text-sm font-medium">Автор</label>
                    <Input id="author" placeholder="Введите имя автора" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="genre" className="text-sm font-medium">Жанр</label>
                    <Input id="genre" placeholder="Введите основной жанр" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="description" className="text-sm font-medium">Описание</label>
                    <textarea 
                      id="description" 
                      className="w-full min-h-[100px] px-3 py-2 border rounded-md resize-none" 
                      placeholder="Введите описание серии"
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button>Сохранить</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
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
                        <Button variant="outline" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="text-red-500 hover:text-red-700"
                          onClick={() => handleDelete(item.id)}
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
        </CardContent>
      </Card>
    </AdminLayout>
  );
};

export default SeriesManagement;
