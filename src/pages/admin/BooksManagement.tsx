
import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Book } from "@/types/bookTypes";
import BookFilters from "@/components/admin/books/BookFilters";
import BookTable from "@/components/admin/books/BookTable";
import AddBookDialog from "@/components/admin/books/AddBookDialog";
import EditBookDialog from "@/components/admin/books/EditBookDialog";

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

  const handleAddBook = (newBookData: Omit<Book, "id" | "dateAdded">) => {
    const id = Math.random().toString(36).substring(2, 9);
    const dateAdded = new Date().toISOString().split("T")[0];
    
    const bookToAdd: Book = {
      id,
      ...newBookData,
      dateAdded
    };
    
    const updatedBooks = [...books, bookToAdd];
    setBooks(updatedBooks);
    setFilteredBooks(updatedBooks);
    setIsAddDialogOpen(false);
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
    <AdminLayout title="Управление книгами">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Управление книгами</h1>
          <Button onClick={() => setIsAddDialogOpen(true)}>Добавить книгу</Button>
        </div>

        <BookFilters 
          searchTerm={searchTerm}
          onSearch={handleSearch}
          onFilterByStatus={handleFilterByStatus}
        />

        <BookTable 
          books={filteredBooks}
          onEditBook={openEditDialog}
          onDeleteBook={handleDeleteBook}
        />
      </div>

      <AddBookDialog 
        isOpen={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
        onAddBook={handleAddBook}
      />

      <EditBookDialog 
        isOpen={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
        book={currentBook}
        onBookChange={setCurrentBook}
        onSaveBook={handleEditBook}
      />
    </AdminLayout>
  );
};

export default BooksManagement;
