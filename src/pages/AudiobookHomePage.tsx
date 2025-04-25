
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, BookmarkIcon, Clock, Heart, PlayCircle, Search } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import AudiobookCard from '@/components/AudiobookCard';
import GenreList from '@/components/GenreList';
import LatestReleases from '@/components/LatestReleases';
import PopularAuthors from '@/components/PopularAuthors';

const mockCategories = [
  { id: 'fantasy', name: 'Фэнтези', count: 1204 },
  { id: 'detective', name: 'Детективы', count: 856 },
  { id: 'scifi', name: 'Фантастика', count: 723 },
  { id: 'romance', name: 'Любовные романы', count: 541 },
  { id: 'history', name: 'История', count: 320 },
  { id: 'psychology', name: 'Психология', count: 298 },
  { id: 'business', name: 'Бизнес', count: 256 },
  { id: 'biographies', name: 'Биографии', count: 189 },
  { id: 'children', name: 'Детские книги', count: 432 },
  { id: 'classics', name: 'Классика', count: 267 }
];

const mockFeaturedBooks = [
  {
    id: '1',
    title: 'Гарри Поттер и философский камень',
    author: 'Дж. К. Роулинг',
    narrator: 'Александр Клюквин',
    duration: '8ч 43м',
    coverUrl: 'https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    rating: 4.8,
    genre: 'Фэнтези',
    likes: 5243
  },
  {
    id: '2',
    title: 'Мастер и Маргарита',
    author: 'Михаил Булгаков',
    narrator: 'Владимир Самойлов',
    duration: '15ч 20м',
    coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    rating: 4.9,
    genre: 'Классика',
    likes: 4872
  },
  {
    id: '3',
    title: 'Шерлок Холмс: Этюд в багровых тонах',
    author: 'Артур Конан Дойл',
    narrator: 'Кирилл Пирогов',
    duration: '5ч 18м',
    coverUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    rating: 4.6,
    genre: 'Детектив',
    likes: 3241
  },
  {
    id: '4',
    title: '1984',
    author: 'Джордж Оруэлл',
    narrator: 'Игорь Князев',
    duration: '9ч 12м',
    coverUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    rating: 4.7,
    genre: 'Антиутопия',
    likes: 4153
  },
  {
    id: '5',
    title: 'Метро 2033',
    author: 'Дмитрий Глуховский',
    narrator: 'Сергей Кузнецов',
    duration: '11ч 05м',
    coverUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    rating: 4.5,
    genre: 'Постапокалипсис',
    likes: 3879
  },
  {
    id: '6',
    title: 'Война и мир',
    author: 'Лев Толстой',
    narrator: 'Александр Бордуков',
    duration: '63ч 28м',
    coverUrl: 'https://images.unsplash.com/photo-1535398089889-dd807df1dfaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    rating: 4.4,
    genre: 'Классика',
    likes: 2987
  }
];

const mockAuthors = [
  { id: '1', name: 'Стивен Кинг', books: 67, image: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&w=150&h=150&crop=faces&fit=crop' },
  { id: '2', name: 'Дж. К. Роулинг', books: 14, image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&w=150&h=150&crop=faces&fit=crop' },
  { id: '3', name: 'Агата Кристи', books: 78, image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&w=150&h=150&crop=faces&fit=crop' },
  { id: '4', name: 'Федор Достоевский', books: 23, image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&w=150&h=150&crop=faces&fit=crop' }
];

const mockLatestReleases = [
  {
    id: '10',
    title: 'Новая земля',
    author: 'Дмитрий Емец',
    releaseDate: '15 июн 2023',
    coverUrl: 'https://images.unsplash.com/photo-1594312915251-48db9280c8f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: '11',
    title: 'Тихий Дон',
    author: 'Михаил Шолохов',
    releaseDate: '10 июн 2023',
    coverUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: '12',
    title: 'Темная башня',
    author: 'Стивен Кинг',
    releaseDate: '8 июн 2023',
    coverUrl: 'https://images.unsplash.com/photo-1533561052604-c3beb6d55b8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
  },
  {
    id: '13',
    title: 'Американские боги',
    author: 'Нил Гейман',
    releaseDate: '5 июн 2023',
    coverUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
  }
];

const AudiobookHomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Главный баннер */}
        <div className="relative rounded-xl overflow-hidden mb-10 bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: "url('https://images.unsplash.com/photo-1492496626933-5478a27c392a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"}}></div>
          <div className="relative z-10 p-8 md:p-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Аудиокниги для каждого</h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl">Более 50,000 аудиокниг от лучших авторов. Начните слушать прямо сейчас!</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 text-gray-300" />
                <Input 
                  type="text" 
                  placeholder="Найти книгу, автора или исполнителя" 
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-300 h-12 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button className="bg-white text-indigo-900 hover:bg-gray-100 h-12">
                <Search className="mr-2 h-4 w-4" /> Найти
              </Button>
            </div>
          </div>
        </div>

        {/* Основной контент */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Левая колонка - Категории */}
          <div className="lg:col-span-1">
            <Card className="p-5">
              <h2 className="text-xl font-bold mb-4">Жанры и категории</h2>
              <GenreList genres={mockCategories} />
            </Card>
            
            <Card className="p-5 mt-6">
              <h2 className="text-xl font-bold mb-4">Новые поступления</h2>
              <LatestReleases releases={mockLatestReleases} />
            </Card>
            
            <Card className="p-5 mt-6">
              <h2 className="text-xl font-bold mb-4">Популярные авторы</h2>
              <PopularAuthors authors={mockAuthors} />
            </Card>
          </div>

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
              
              <TabsContent value="popular" className="space-y-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Популярные аудиокниги</h2>
                  <Button variant="outline" className="flex items-center">
                    <BookOpen className="mr-2 h-4 w-4" /> Смотреть все
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {mockFeaturedBooks.map(book => (
                    <AudiobookCard key={book.id} audiobook={book} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="new" className="space-y-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Новые поступления</h2>
                  <Button variant="outline" className="flex items-center">
                    <BookOpen className="mr-2 h-4 w-4" /> Смотреть все
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {mockFeaturedBooks.slice(0, 3).map(book => (
                    <AudiobookCard key={book.id} audiobook={book} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="collections" className="space-y-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Тематические коллекции</h2>
                  <Button variant="outline" className="flex items-center">
                    <BookmarkIcon className="mr-2 h-4 w-4" /> Смотреть все
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="overflow-hidden">
                    <div className="relative h-40 bg-gradient-to-r from-blue-800 to-indigo-700">
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <h3 className="text-2xl font-bold text-white">Классическая литература</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 mb-4">Лучшие произведения мировой классики в аудиоформате</p>
                      <Button variant="outline" className="w-full">
                        <PlayCircle className="mr-2 h-4 w-4" /> Перейти к коллекции
                      </Button>
                    </div>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <div className="relative h-40 bg-gradient-to-r from-orange-600 to-red-700">
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <h3 className="text-2xl font-bold text-white">Фантастика и фэнтези</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 mb-4">Погрузитесь в миры фантастики и фэнтези</p>
                      <Button variant="outline" className="w-full">
                        <PlayCircle className="mr-2 h-4 w-4" /> Перейти к коллекции
                      </Button>
                    </div>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
            
            {/* Рекомендации и избранное */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-6">Вам может понравиться</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {mockFeaturedBooks.slice(0, 3).map(book => (
                  <AudiobookCard key={book.id} audiobook={book} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AudiobookHomePage;
