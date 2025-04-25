
import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Trash2, PlusCircle, Edit } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Category = {
  id: string;
  name: string;
  description: string;
  count: number;
};

// Начальные данные для демонстрации
const initialCategories: Category[] = [
  { id: "new", name: "Новинки", description: "Самые свежие аудиокниги", count: 24 },
  { id: "popular", name: "Популярное", description: "Часто прослушиваемые книги", count: 42 },
  { id: "detective", name: "Детективы", description: "Увлекательные расследования", count: 18 },
  { id: "fantasy", name: "Фэнтези", description: "Магические миры", count: 31 },
  { id: "scifi", name: "Фантастика", description: "Научная фантастика", count: 26 },
  { id: "romance", name: "Любовные романы", description: "Истории о любви", count: 15 },
  { id: "horror", name: "Ужасы", description: "Мистика и пугающие истории", count: 9 },
  { id: "psychology", name: "Психология", description: "Книги о разуме", count: 22 },
  { id: "business", name: "Бизнес", description: "Литература о предпринимательстве", count: 17 },
  { id: "history", name: "История", description: "Исторические события", count: 14 },
  { id: "children", name: "Для детей", description: "Сказки для детей", count: 28 },
];

const CategoriesManagement = () => {
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<Category>({ 
    id: "", 
    name: "", 
    description: "", 
    count: 0 
  });
  
  const handleOpenDialog = (category?: Category) => {
    if (category) {
      setCurrentCategory(category);
      setIsEditMode(true);
    } else {
      setCurrentCategory({ id: "", name: "", description: "", count: 0 });
      setIsEditMode(false);
    }
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleSaveCategory = () => {
    if (isEditMode) {
      // Обновление существующей категории
      setCategories(categories.map(cat => 
        cat.id === currentCategory.id ? currentCategory : cat
      ));
    } else {
      // Добавление новой категории
      const newCategory = {
        ...currentCategory,
        id: currentCategory.name.toLowerCase().replace(/\s+/g, '-'),
        count: 0
      };
      setCategories([...categories, newCategory]);
    }
    handleCloseDialog();
  };

  const handleDeleteCategory = (id: string) => {
    setCategories(categories.filter(cat => cat.id !== id));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCurrentCategory({ ...currentCategory, [name]: value });
  };

  return (
    <AdminLayout title="Управление категориями">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Категории ({categories.length})</h2>
        <Button onClick={() => handleOpenDialog()}>
          <PlusCircle className="h-4 w-4 mr-2" />
          Добавить категорию
        </Button>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Card key={category.id} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">{category.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{category.description}</p>
                  <p className="text-sm mt-2">Книг: <span className="font-semibold">{category.count}</span></p>
                </div>
                <div className="flex space-x-1">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => handleOpenDialog(category)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDeleteCategory(category.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {isEditMode ? "Редактировать категорию" : "Добавить категорию"}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Название категории</Label>
              <Input 
                id="name" 
                name="name" 
                value={currentCategory.name} 
                onChange={handleInputChange} 
                placeholder="Например: Фантастика"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Описание</Label>
              <Textarea 
                id="description" 
                name="description" 
                value={currentCategory.description} 
                onChange={handleInputChange} 
                placeholder="Краткое описание категории"
                rows={3}
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={handleCloseDialog}
            >
              Отмена
            </Button>
            <Button 
              onClick={handleSaveCategory}
              disabled={!currentCategory.name.trim()}
            >
              {isEditMode ? "Сохранить" : "Добавить"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default CategoriesManagement;
