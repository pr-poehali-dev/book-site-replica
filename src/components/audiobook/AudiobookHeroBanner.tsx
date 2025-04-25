
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface AudiobookHeroBannerProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const AudiobookHeroBanner = ({ searchQuery, onSearchChange }: AudiobookHeroBannerProps) => {
  return (
    <div className="relative rounded-xl overflow-hidden mb-10 bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1492496626933-5478a27c392a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"}}
      ></div>
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
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
          <Button className="bg-white text-indigo-900 hover:bg-gray-100 h-12">
            <Search className="mr-2 h-4 w-4" /> Найти
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AudiobookHeroBanner;
