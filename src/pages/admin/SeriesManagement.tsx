
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import AdminLayout from "@/components/admin/AdminLayout";
import SeriesTable from "@/components/admin/series/SeriesTable";
import SeriesToolbar from "@/components/admin/series/SeriesToolbar";
import SeriesFormDialog from "@/components/admin/series/SeriesFormDialog";
import SeriesViewDialog from "@/components/admin/series/SeriesViewDialog";
import { SeriesItemProps } from "@/types/seriesTypes";

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

const SeriesManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [series, setSeries] = useState<SeriesItemProps[]>(mockSeries);
  const [isFormDialogOpen, setIsFormDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [editingSeries, setEditingSeries] = useState<SeriesItemProps | null>(null);
  const [viewingSeries, setViewingSeries] = useState<SeriesItemProps | null>(null);

  // Фильтрация серий по поисковому запросу
  const filteredSeries = series.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Обработчик удаления серии
  const handleDelete = (id: number) => {
    setSeries(series.filter(item => item.id !== id));
  };

  // Обработчик открытия диалога редактирования
  const handleEdit = (series: SeriesItemProps) => {
    setEditingSeries(series);
    setIsFormDialogOpen(true);
  };

  // Обработчик открытия диалога просмотра
  const handleView = (series: SeriesItemProps) => {
    setViewingSeries(series);
    setIsViewDialogOpen(true);
  };

  // Обработчик добавления/редактирования серии
  const handleSaveSeries = (seriesData: Omit<SeriesItemProps, 'id'> & { id?: number }) => {
    if (seriesData.id) {
      // Редактирование существующей серии
      setSeries(currentSeries => 
        currentSeries.map(item => 
          item.id === seriesData.id ? { ...seriesData, id: item.id } as SeriesItemProps : item
        )
      );
    } else {
      // Добавление новой серии
      const newId = Math.max(...series.map(item => item.id), 0) + 1;
      setSeries(currentSeries => [
        ...currentSeries, 
        { ...seriesData, id: newId, booksCount: seriesData.booksCount || 0 } as SeriesItemProps
      ]);
    }
    setEditingSeries(null);
  };

  // Обработчик открытия диалога добавления
  const handleAddClick = () => {
    setEditingSeries(null);
    setIsFormDialogOpen(true);
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
          <SeriesToolbar 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onAddClick={handleAddClick}
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <SeriesTable 
            filteredSeries={filteredSeries}
            onDelete={handleDelete}
            onEdit={handleEdit}
            onView={handleView}
          />
        </CardContent>
      </Card>

      <SeriesFormDialog 
        isOpen={isFormDialogOpen}
        onClose={() => setIsFormDialogOpen(false)}
        onSave={handleSaveSeries}
        editingSeries={editingSeries}
      />

      <SeriesViewDialog 
        isOpen={isViewDialogOpen}
        onClose={() => setIsViewDialogOpen(false)}
        series={viewingSeries}
      />
    </AdminLayout>
  );
};

export default SeriesManagement;
