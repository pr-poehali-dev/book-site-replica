
import { Book } from "@/types/bookTypes";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import BookFormFields from "./BookFormFields";

interface EditBookDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  book: Book | null;
  onBookChange: (book: Book) => void;
  onSaveBook: () => void;
}

const EditBookDialog = ({ 
  isOpen, 
  onOpenChange, 
  book, 
  onBookChange,
  onSaveBook 
}: EditBookDialogProps) => {
  if (!book) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Редактировать книгу</DialogTitle>
        </DialogHeader>
        
        <BookFormFields 
          book={book} 
          onBookChange={onBookChange as (book: Partial<Book>) => void} 
        />
        
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Отмена
          </Button>
          <Button onClick={onSaveBook}>Сохранить</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditBookDialog;
