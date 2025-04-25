
import AudiobookCard from '@/components/AudiobookCard';
import { Audiobook } from '@/types/audiobook';

interface RecommendedBooksProps {
  books: Audiobook[];
}

const RecommendedBooks = ({ books }: RecommendedBooksProps) => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-6">Вам может понравиться</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map(book => (
          <AudiobookCard key={book.id} audiobook={book} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedBooks;
