
import { useState } from "react";
import { Book } from "@/types/bookTypes";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import BookFormFields from "./BookFormFields";

interface AddBookDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onAddBook: (book: Omit<Book, "id" | "dateAdded">) => void;
}

const AddBookDialog = ({ isOpen, onOpenChange, onAddBook }: AddBookDialogProps) => {
  const [newBook, setNewBook] = useState<Omit<Book, "id" | "dateAdded">>({
    title: "",
    author: "",
    category: "",
    status: "draft",
    cover: ""
  });

  const handleAddBook = () => {
    onAddBook(newBook);
    setNewBook({
      title: "",
      author: "",
      category: "",
      status: "draft",
      cover: ""
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Добавить новую книгу</DialogTitle>
        </DialogHeader>
        
        <BookFormFields 
          book={newBook} 
          onBookChange={setNewBook as (book: Partial<Book>) => void} 
          isNew={true}
        />
        
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Отмена
          </Button>
          <Button onClick={handleAddBook}>Добавить</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddBookDialog;
