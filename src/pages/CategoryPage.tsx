
import { useParams } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import BookCard from "@/components/BookCard";
import { featuredBooks, newReleases, popularBooks } from "@/data/booksData";
import { BookCardProps } from "@/components/BookCard";

const allBooks: BookCardProps[] = [...featuredBooks, ...newReleases, ...popularBooks];

const categoryMap: Record<string, { title: string; description: string }> = {
  "new": { 
    title: "Новинки", 
    description: "Самые свежие аудиокниги, добавленные на нашу платформу" 
  },
  "popular": { 
    title: "Популярное", 
    description: "Аудиокниги, которые чаще всего слушают наши пользователи" 
  },
  "detective": { 
    title: "Детективы", 
    description: "Увлекательные расследования, загадки и тайны" 
  },
  "fantasy": { 
    title: "Фэнтези", 
    description: "Магические миры, драконы, волшебники и невероятные приключения" 
  },
  "scifi": { 
    title: "Фантастика", 
    description: "Научная фантастика, космические путешествия и технологии будущего" 
  },
  "romance": { 
    title: "Любовные романы", 
    description: "Истории о любви, отношениях и глубоких чувствах" 
  },
  "horror": { 
    title: "Ужасы", 
    description: "Мистика, сверхъестественные явления и пугающие истории" 
  },
  "psychology": { 
    title: "Психология", 
    description: "Книги о человеческом разуме, поведении и развитии личности" 
  },
  "business": { 
    title: "Бизнес", 
    description: "Литература о предпринимательстве, маркетинге и саморазвитии" 
  },
  "history": { 
    title: "История", 
    description: "Исторические события, личности и эпохи" 
  },
  "children": { 
    title: "Для детей", 
    description: "Сказки, повести и рассказы для юных слушателей" 
  },
};

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();

  // Если категория не найдена, используем "new" как дефолтную
  const category = categoryId && categoryMap[categoryId] 
    ? categoryMap[categoryId] 
    : categoryMap.new;
  
  // Фильтрация книг по категориям (в реальном приложении здесь был бы API-запрос)
  const getBooksByCategory = (categoryId: string): BookCardProps[] => {
    if (categoryId === 'new') {
      return newReleases;
    } else if (categoryId === 'popular') {
      return popularBooks;
    } else {
      // Для демонстрации - фильтруем по жанру, который соответствует названию категории
      return allBooks.filter(book => 
        book.genre.toLowerCase().includes(categoryMap[categoryId]?.title.toLowerCase() || '')
      );
    }
  };

  const booksToShow = categoryId ? getBooksByCategory(categoryId) : [];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{category.title}</h1>
          <p className="text-gray-600">{category.description}</p>
        </div>

        {booksToShow.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {booksToShow.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-gray-600">
              В этой категории пока нет аудиокниг
            </h3>
            <p className="mt-2 text-gray-500">
              Мы работаем над пополнением нашей библиотеки
            </p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default CategoryPage;
