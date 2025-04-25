
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SeriesItemProps } from "@/types/seriesTypes";

interface SeriesFormDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (series: Omit<SeriesItemProps, 'id'> & { id?: number }) => void;
  editingSeries: SeriesItemProps | null;
}

const SeriesFormDialog = ({ isOpen, onClose, onSave, editingSeries }: SeriesFormDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    genre: "",
    description: "",
    booksCount: 0
  });

  useEffect(() => {
    if (editingSeries) {
      setFormData({
        name: editingSeries.name,
        author: editingSeries.author,
        genre: editingSeries.genre,
        description: editingSeries.description,
        booksCount: editingSeries.booksCount
      });
    } else {
      setFormData({
        name: "",
        author: "",
        genre: "",
        description: "",
        booksCount: 0
      });
    }
  }, [editingSeries, isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    onSave(editingSeries ? { ...formData, id: editingSeries.id } : formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {editingSeries ? "Редактировать серию" : "Добавить новую серию"}
          </DialogTitle>
          <DialogDescription>
            {editingSeries 
              ? "Измените информацию о серии книг" 
              : "Заполните информацию о серии книг для добавления в каталог"}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">Название серии</label>
            <Input 
              id="name" 
              placeholder="Введите название серии" 
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="author" className="text-sm font-medium">Автор</label>
            <Input 
              id="author" 
              placeholder="Введите имя автора" 
              value={formData.author}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="genre" className="text-sm font-medium">Жанр</label>
            <Input 
              id="genre" 
              placeholder="Введите основной жанр" 
              value={formData.genre}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">Описание</label>
            <textarea 
              id="description" 
              className="w-full min-h-[100px] px-3 py-2 border rounded-md resize-none" 
              placeholder="Введите описание серии"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>Отмена</Button>
          <Button onClick={handleSubmit}>Сохранить</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SeriesFormDialog;
