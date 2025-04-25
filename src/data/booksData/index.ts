
import { featuredBooks } from './featuredBooks';
import { newReleases } from './newReleases';
import { popularBooks } from './popularBooks';
import { categories } from './categories';
import { Book } from '../../types/bookTypes';

/**
 * Комбинированный список всех книг
 */
export const allBooks: Book[] = [...featuredBooks, ...newReleases, ...popularBooks];

/**
 * Получение книг по категории
 * @param categorySlug Слаг категории для фильтрации
 * @returns Отфильтрованный список книг
 */
export const getBooksByCategory = (categorySlug: string): Book[] => {
  const categoryName = categories.find(cat => cat.slug === categorySlug)?.name;
  if (!categoryName) return [];
  return allBooks.filter(book => book.category === categoryName);
};

/**
 * Получение популярных книг
 * @param limit Опциональное ограничение количества результатов
 * @returns Список популярных книг
 */
export const getPopularBooks = (limit?: number): Book[] => {
  const filtered = allBooks.filter(book => book.isPopular);
  return limit ? filtered.slice(0, limit) : filtered;
};

/**
 * Получение новых поступлений
 * @param limit Опциональное ограничение количества результатов
 * @returns Список новых книг
 */
export const getNewReleases = (limit?: number): Book[] => {
  const filtered = allBooks.filter(book => book.isNew);
  return limit ? filtered.slice(0, limit) : filtered;
};

/**
 * Получение избранных книг
 * @param limit Опциональное ограничение количества результатов
 * @returns Список избранных книг
 */
export const getFavoriteBooks = (limit?: number): Book[] => {
  const filtered = allBooks.filter(book => book.isFavorite);
  return limit ? filtered.slice(0, limit) : filtered;
};

/**
 * Поиск книг по названию или автору
 * @param searchTerm Поисковый запрос
 * @returns Отфильтрованный список книг
 */
export const searchBooks = (searchTerm: string): Book[] => {
  const term = searchTerm.toLowerCase();
  return allBooks.filter(
    book => 
      book.title.toLowerCase().includes(term) || 
      book.author.toLowerCase().includes(term)
  );
};

export { featuredBooks, newReleases, popularBooks, categories };
