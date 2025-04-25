
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface BookCardProps {
  id: string;
  title: string;
  author: string;
  narrator: string;
  coverUrl: string;
  rating: number;
  duration: string;
  genre?: string;
  isNew?: boolean;
}

const BookCard = ({
  id,
  title,
  author,
  narrator,
  coverUrl,
  rating,
  duration,
  genre,
  isNew = false,
}: BookCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md group">
      <CardContent className="p-0 relative">
        <img
          src={coverUrl}
          alt={title}
          className="w-full aspect-[2/3] object-cover"
        />
        {isNew && (
          <Badge className="absolute top-2 right-2 bg-red-500">Новинка</Badge>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 left-2 bg-white/80 hover:bg-white text-gray-700"
        >
          <Heart className="h-4 w-4" />
        </Button>
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
          <Button className="rounded-full" size="lg">
            <Play className="mr-2" /> Слушать
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-3 gap-1">
        <div className="flex items-center gap-1 text-amber-500 mb-1">
          <Star className="fill-amber-500 h-4 w-4" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
        <h3 className="font-medium line-clamp-2 text-sm hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-xs">{author}</p>
        <p className="text-gray-500 text-xs">Читает: {narrator}</p>
        <div className="flex items-center justify-between w-full mt-1">
          <span className="text-xs text-gray-500">{duration}</span>
          {genre && (
            <Badge variant="outline" className="text-xs">
              {genre}
            </Badge>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
