
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Book } from "@/data/warhammer40kData";

interface WarhammerBookCardProps extends Book {}

const WarhammerBookCard = ({
  id,
  title,
  author,
  narrator,
  coverUrl,
  rating,
  duration,
  faction,
  isNew = false,
  series,
}: WarhammerBookCardProps) => {
  const getFactionColor = (faction?: string) => {
    switch (faction) {
      case "Империум Человечества":
        return "bg-warhammer-imperium";
      case "Хаос":
        return "bg-warhammer-chaos";
      case "Эльдар":
        return "bg-warhammer-eldar";
      case "Орки":
        return "bg-warhammer-orks";
      case "Тираниды":
        return "bg-warhammer-tyranid";
      case "Некроны":
        return "bg-warhammer-necron";
      case "Т'ау":
        return "bg-warhammer-tau";
      default:
        return "bg-warhammer-accent";
    }
  };
  
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md group book-card-hover bg-warhammer-dark border-warhammer-accent/20">
      <CardContent className="p-0 relative">
        <img
          src={coverUrl}
          alt={title}
          className="w-full aspect-[2/3] object-cover"
        />
        {isNew && (
          <Badge className="absolute top-2 right-2 bg-warhammer-primary text-white">Новинка</Badge>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 left-2 bg-warhammer-dark/80 hover:bg-warhammer-dark text-warhammer-accent"
        >
          <Heart className="h-4 w-4" />
        </Button>
        <div className="absolute inset-0 bg-gradient-to-t from-warhammer-dark/90 via-warhammer-dark/40 to-transparent opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
          <Button className="rounded-full bg-warhammer-primary hover:bg-warhammer-primary/80 text-white" size="lg">
            <Play className="mr-2" /> Слушать
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-3 gap-1 bg-warhammer-dark text-warhammer-light">
        <div className="flex items-center gap-1 text-warhammer-accent mb-1">
          <Star className="fill-warhammer-accent stroke-warhammer-accent h-4 w-4" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
        <h3 className="font-medium line-clamp-2 text-sm hover:text-warhammer-primary transition-colors">
          {title}
        </h3>
        <p className="text-warhammer-light/70 text-xs">{author}</p>
        <p className="text-warhammer-light/50 text-xs">Читает: {narrator}</p>
        <div className="flex items-center justify-between w-full mt-1">
          <span className="text-xs text-warhammer-light/50">{duration}</span>
          <div className="flex gap-1">
            {faction && (
              <Badge variant="outline" className={`text-xs text-white ${getFactionColor(faction)}`}>
                {faction}
              </Badge>
            )}
            {series && (
              <Badge variant="outline" className="text-xs border-warhammer-accent text-warhammer-accent">
                {series}
              </Badge>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default WarhammerBookCard;
