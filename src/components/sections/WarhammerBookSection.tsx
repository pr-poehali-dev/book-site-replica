
import { Book } from "@/data/warhammer40kData";
import WarhammerBookCard from "../WarhammerBookCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface WarhammerBookSectionProps {
  title: string;
  books: Book[];
  viewAllLink?: string;
  showSeparator?: boolean;
}

const WarhammerBookSection = ({
  title,
  books,
  viewAllLink,
  showSeparator = true,
}: WarhammerBookSectionProps) => {
  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-heading text-warhammer-accent">
            {title}
          </h2>
          {viewAllLink && (
            <Link to={viewAllLink}>
              <Button variant="link" className="text-warhammer-primary hover:text-warhammer-accent">
                Смотреть все <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          )}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {books.map((book) => (
            <WarhammerBookCard key={book.id} {...book} />
          ))}
        </div>
      </div>
      
      {showSeparator && (
        <div className="container mx-auto px-4 mt-12">
          <div className="h-px bg-gradient-to-r from-transparent via-warhammer-accent/30 to-transparent"></div>
        </div>
      )}
    </section>
  );
};

export default WarhammerBookSection;
