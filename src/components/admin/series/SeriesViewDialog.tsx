
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SeriesItemProps } from "@/types/seriesTypes";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

interface SeriesViewDialogProps {
  isOpen: boolean;
  onClose: () => void;
  series: SeriesItemProps | null;
}

const SeriesViewDialog = ({ isOpen, onClose, series }: SeriesViewDialogProps) => {
  if (!series) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{series.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">Автор</div>
            <div className="font-medium">{series.author}</div>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">Жанр</div>
            <div className="font-medium">{series.genre}</div>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">Книг в серии</div>
            <div className="font-medium flex items-center">
              <BookOpen className="h-4 w-4 mr-2 text-gray-500" />
              {series.booksCount}
            </div>
          </div>
          
          <div className="border-t pt-4 mt-4">
            <div className="text-sm text-gray-500 mb-2">Описание</div>
            <div className="text-sm">{series.description}</div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button variant="outline" onClick={onClose}>Закрыть</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SeriesViewDialog;
