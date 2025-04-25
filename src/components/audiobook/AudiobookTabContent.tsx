
import { Button } from '@/components/ui/button';
import { BookOpen, BookmarkIcon } from 'lucide-react';
import AudiobookCard from '@/components/AudiobookCard';
import { Audiobook } from '@/types/audiobook';

interface AudiobookTabContentProps {
  title: string;
  books: Audiobook[];
  icon: React.ReactNode;
}

const AudiobookTabContent = ({ title, books, icon }: AudiobookTabContentProps) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Button variant="outline" className="flex items-center">
          {icon} Смотреть все
        </Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map(book => (
          <AudiobookCard key={book.id} audiobook={book} />
        ))}
      </div>
    </div>
  );
};

export default AudiobookTabContent;
