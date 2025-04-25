
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";

const categories = [
  { id: "new", name: "Новинки" },
  { id: "popular", name: "Популярное" },
  { id: "detective", name: "Детективы" },
  { id: "fantasy", name: "Фэнтези" },
  { id: "scifi", name: "Фантастика" },
  { id: "romance", name: "Любовные романы" },
  { id: "horror", name: "Ужасы" },
  { id: "psychology", name: "Психология" },
  { id: "business", name: "Бизнес" },
  { id: "history", name: "История" },
  { id: "children", name: "Для детей" },
];

const CategoryNav = () => {
  return (
    <div className="border-b border-gray-200 bg-gray-50">
      <ScrollArea className="w-full">
        <div className="flex space-x-1 p-2 whitespace-nowrap">
          {categories.map((category) => (
            <Link key={category.id} to={`/category/${category.id}`}>
              <Button variant="ghost" size="sm" className="text-sm">
                {category.name}
              </Button>
            </Link>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default CategoryNav;
