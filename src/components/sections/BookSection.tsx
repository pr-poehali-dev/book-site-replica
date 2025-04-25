
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";
import BookCard, { BookCardProps } from "@/components/BookCard";

interface BookSectionProps {
  title: string;
  books: BookCardProps[];
  showSeparator?: boolean;
}

const BookSection = ({ title, books, showSeparator = true }: BookSectionProps) => {
  return (
    <>
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <Button variant="link" className="text-primary flex items-center">
            Смотреть все <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {books.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      </section>

      {showSeparator && <Separator className="my-8" />}
    </>
  );
};

export default BookSection;
