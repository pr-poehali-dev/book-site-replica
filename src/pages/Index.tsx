
import Header from "@/components/Header";
import CategoryNav from "@/components/CategoryNav";
import BookCard from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";

const featuredBooks = [
  {
    id: "1",
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    narrator: "Александр Клюквин",
    coverUrl: "https://source.unsplash.com/random/300x450?book-1",
    rating: 4.8,
    duration: "16ч 35м",
    genre: "Классика",
    isNew: true,
  },
  {
    id: "2",
    title: "Гарри Поттер и философский камень",
    author: "Джоан Роулинг",
    narrator: "Александр Клюквин",
    coverUrl: "https://source.unsplash.com/random/300x450?book-2",
    rating: 4.9,
    duration: "8ч 15м",
    genre: "Фэнтези",
  },
  {
    id: "3",
    title: "1984",
    author: "Джордж Оруэлл",
    narrator: "Игорь Князев",
    coverUrl: "https://source.unsplash.com/random/300x450?book-3",
    rating: 4.7,
    duration: "12ч 42м",
    genre: "Антиутопия",
    isNew: true,
  },
  {
    id: "4",
    title: "Шерлок Холмс. Все приключения",
    author: "Артур Конан Дойл",
    narrator: "Кирилл Радциг",
    coverUrl: "https://source.unsplash.com/random/300x450?book-4",
    rating: 4.6,
    duration: "36ч 20м",
    genre: "Детектив",
  },
];

const newReleases = [
  {
    id: "5",
    title: "Тревожные люди",
    author: "Фредрик Бакман",
    narrator: "Ксения Бржезовская",
    coverUrl: "https://source.unsplash.com/random/300x450?book-5",
    rating: 4.5,
    duration: "9ч 27м",
    genre: "Роман",
    isNew: true,
  },
  {
    id: "6",
    title: "Задача трех тел",
    author: "Лю Цысинь",
    narrator: "Сергей Чонишвили",
    coverUrl: "https://source.unsplash.com/random/300x450?book-6",
    rating: 4.7,
    duration: "14ч 58м",
    genre: "Научная фантастика",
    isNew: true,
  },
  {
    id: "7",
    title: "Убийство в Восточном экспрессе",
    author: "Агата Кристи",
    narrator: "Мария Абалкина",
    coverUrl: "https://source.unsplash.com/random/300x450?book-7",
    rating: 4.8,
    duration: "6ч 17м",
    genre: "Детектив",
    isNew: true,
  },
  {
    id: "8",
    title: "Паразиты сознания",
    author: "Сергей Тармашев",
    narrator: "Иван Жарков",
    coverUrl: "https://source.unsplash.com/random/300x450?book-8",
    rating: 4.3,
    duration: "11ч 42м",
    genre: "Фантастика",
    isNew: true,
  },
];

const popularBooks = [
  {
    id: "9",
    title: "Метро 2033",
    author: "Дмитрий Глуховский",
    narrator: "Дмитрий Креминский",
    coverUrl: "https://source.unsplash.com/random/300x450?book-9",
    rating: 4.6,
    duration: "20ч 10м",
    genre: "Постапокалипсис",
  },
  {
    id: "10",
    title: "Война и мир",
    author: "Лев Толстой",
    narrator: "Александр Бордуков",
    coverUrl: "https://source.unsplash.com/random/300x450?book-10",
    rating: 4.9,
    duration: "65ч 40м",
    genre: "Классика",
  },
  {
    id: "11",
    title: "Ведьмак. Последнее желание",
    author: "Анджей Сапковский",
    narrator: "Кирилл Петров",
    coverUrl: "https://source.unsplash.com/random/300x450?book-11",
    rating: 4.8,
    duration: "10ч 25м",
    genre: "Фэнтези",
  },
  {
    id: "12",
    title: "Гордость и предубеждение",
    author: "Джейн Остин",
    narrator: "Елена Соловьева",
    coverUrl: "https://source.unsplash.com/random/300x450?book-12",
    rating: 4.7,
    duration: "11ч 35м",
    genre: "Роман",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <CategoryNav />
      
      <main className="container mx-auto px-4 py-6">
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Рекомендуемые</h2>
            <Button variant="link" className="text-primary flex items-center">
              Смотреть все <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        </section>

        <Separator className="my-8" />

        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Новинки</h2>
            <Button variant="link" className="text-primary flex items-center">
              Смотреть все <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {newReleases.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        </section>

        <Separator className="my-8" />

        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Популярное</h2>
            <Button variant="link" className="text-primary flex items-center">
              Смотреть все <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {popularBooks.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-600">
            <p>© 2024 АудиоКнига. Все права защищены.</p>
            <p className="mt-2 text-sm">Сайт разработан для любителей аудиокниг</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
