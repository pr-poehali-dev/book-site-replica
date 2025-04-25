
import { Card } from '@/components/ui/card';
import GenreList from '@/components/GenreList';
import LatestReleases from '@/components/LatestReleases';
import PopularAuthors from '@/components/PopularAuthors';
import { Genre, Release, Author } from '@/types/audiobook';

interface AudiobookSidebarProps {
  categories: Genre[];
  latestReleases: Release[];
  popularAuthors: Author[];
}

const AudiobookSidebar = ({ categories, latestReleases, popularAuthors }: AudiobookSidebarProps) => {
  return (
    <div className="lg:col-span-1">
      <Card className="p-5">
        <h2 className="text-xl font-bold mb-4">Жанры и категории</h2>
        <GenreList genres={categories} />
      </Card>
      
      <Card className="p-5 mt-6">
        <h2 className="text-xl font-bold mb-4">Новые поступления</h2>
        <LatestReleases releases={latestReleases} />
      </Card>
      
      <Card className="p-5 mt-6">
        <h2 className="text-xl font-bold mb-4">Популярные авторы</h2>
        <PopularAuthors authors={popularAuthors} />
      </Card>
    </div>
  );
};

export default AudiobookSidebar;
