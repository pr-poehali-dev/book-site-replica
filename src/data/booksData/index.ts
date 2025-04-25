import { Book } from "../../types/bookTypes";
import { categories } from "./categories";
import { featuredBooks } from "./featuredBooks";
import { newReleases } from "./newReleases";
import { popularBooks } from "./popularBooks";

// Экспорт всех данных
export { categories, featuredBooks, newReleases, popularBooks };

// Комбинированный массив всех книг
export const allBooks: Book[] = [...featuredBooks, ...newReleases, ...popularBooks];

// Вспомогательные функции для работы с данными
export const getBooksByCategory = (categoryName: string): Book[] => {
  return allBooks.filter(book => book.category === categoryName);
};

export const getPopularBooks = (limit?: number): Book[] => {
  const filtered = allBooks.filter(book => book.isPopular);
  return limit ? filtered.slice(0, limit) : filtered;
};

export const getNewReleases = (limit?: number): Book[] => {
  const filtered = allBooks.filter(book => book.isNew);
  return limit ? filtered.slice(0, limit) : filtered;
};

export const getFavoriteBooks = (): Book[] => {
  return allBooks.filter(book => book.isFavorite);
};

export const searchBooks = (query: string): Book[] => {
  const lowercaseQuery = query.toLowerCase();
  return allBooks.filter(book => 
    book.title.toLowerCase().includes(lowercaseQuery) || 
    book.author.toLowerCase().includes(lowercaseQuery)
  );
};
