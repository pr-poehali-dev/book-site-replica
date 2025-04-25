
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, BookmarkIcon, Clock, Heart } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';

// Импорт компонентов
import AudiobookHeroBanner from '@/components/audiobook/AudiobookHeroBanner';
import AudiobookSidebar from '@/components/audiobook/AudiobookSidebar';
import AudiobookTabContent from '@/components/audiobook/AudiobookTabContent';
import ThematicCollections from '@/components/audiobook/ThematicCollections';
import RecommendedBooks from '@/components/audiobook/RecommendedBooks';

// Импорт данных
import { 
  mockCategories, 
  mockFeaturedBooks, 
  mockAuthors, 
  mockLatestReleases,
  mockCollections
} from '@/data/audiobookData';

const AudiobookHomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Главный баннер */}
        <AudiobookHeroBanner 
          searchQuery={searchQuery} 
          onSearchChange={setSearchQuery} 
        />

        {/* Основной контент */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Левая колонка - Категории */}
          <AudiobookSidebar 
            categories={mockCategories}
            latestReleases={mockLatestReleases}
            popularAuthors={mockAuthors}
          />

          {/* Основной контент */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="popular" className="mb-8">
              <TabsList className="mb-4">
                <TabsTrigger value="popular" className="flex items-center">
                  <Heart className="mr-1 h-4 w-4" /> Популярное
                </TabsTrigger>
                <TabsTrigger value="new" className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" /> Новинки
                </TabsTrigger>
                <TabsTrigger value="collections" className="flex items-center">
                  <BookmarkIcon className="mr-1 h-4 w-4" /> Коллекции
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="popular">
                <AudiobookTabContent 
                  title="Популярные аудиокниги"
                  books={mockFeaturedBooks}
                  icon={<BookOpen className="mr-2 h-4 w-4" />}
                />
              </TabsContent>
              
              <TabsContent value="new">
                <AudiobookTabContent 
                  title="Новые поступления"
                  books={mockFeaturedBooks.slice(0, 3)}
                  icon={<BookOpen className="mr-2 h-4 w-4" />}
                />
              </TabsContent>
              
              <TabsContent value="collections">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Тематические коллекции</h2>
                  <BookmarkIcon className="mr-2 h-4 w-4" /> 
                </div>
                
                <ThematicCollections collections={mockCollections} />
              </TabsContent>
            </Tabs>
            
            {/* Рекомендации */}
            <RecommendedBooks books={mockFeaturedBooks.slice(0, 3)} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AudiobookHomePage;
