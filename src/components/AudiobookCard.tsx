
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Play, Star } from 'lucide-react';

type Audiobook = {
  id: string;
  title: string;
  author: string;
  narrator: string;
  duration: string;
  coverUrl: string;
  rating: number;
  genre: string;
  likes: number;
};

interface AudiobookCardProps {
  audiobook: Audiobook;
}

const AudiobookCard = ({ audiobook }: AudiobookCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg">
      <div className="relative">
        <img 
          src={audiobook.coverUrl} 
          alt={audiobook.title} 
          className="w-full h-64 object-cover" 
        />
        <div className="absolute top-2 right-2 flex space-x-1">
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-black/30 text-white hover:bg-black/50">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <Button 
          variant="default" 
          size="icon" 
          className="absolute bottom-4 right-4 h-10 w-10 rounded-full shadow-md"
        >
          <Play className="h-5 w-5" fill="currentColor" />
        </Button>
      </div>
      <div className="p-4">
        <div className="flex mb-2">
          <span className="text-xs bg-indigo-100 text-indigo-800 rounded-full px-2 py-0.5">
            {audiobook.genre}
          </span>
          <span className="ml-2 text-xs bg-gray-100 text-gray-800 rounded-full px-2 py-0.5">
            {audiobook.duration}
          </span>
        </div>
        <h3 className="font-semibold text-lg line-clamp-1">{audiobook.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{audiobook.author}</p>
        <p className="text-xs text-gray-500 mb-3">Читает: {audiobook.narrator}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="ml-1 text-sm">{audiobook.rating}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Heart className="h-3 w-3 mr-1" />
            <span>{audiobook.likes}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AudiobookCard;
