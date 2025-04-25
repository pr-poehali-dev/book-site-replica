
import { Audiobook, Genre, Author, Release, Collection } from '@/types/audiobook';

export const mockCategories: Genre[] = [
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

export const mockFeaturedBooks: Audiobook[] = [
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

export const mockAuthors: Author[] = [
  { id: '1', name: 'Стивен Кинг', books: 67, image: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&w=150&h=150&crop=faces&fit=crop' },
  { id: '2', name: 'Дж. К. Роулинг', books: 14, image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&w=150&h=150&crop=faces&fit=crop' },
  { id: '3', name: 'Агата Кристи', books: 78, image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&w=150&h=150&crop=faces&fit=crop' },
  { id: '4', name: 'Федор Достоевский', books: 23, image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&w=150&h=150&crop=faces&fit=crop' }
];

export const mockLatestReleases: Release[] = [
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

export const mockCollections: Collection[] = [
  {
    id: '1',
    title: 'Классическая литература',
    description: 'Лучшие произведения мировой классики в аудиоформате',
    bgColorFrom: 'blue-800',
    bgColorTo: 'indigo-700'
  },
  {
    id: '2',
    title: 'Фантастика и фэнтези',
    description: 'Погрузитесь в миры фантастики и фэнтези',
    bgColorFrom: 'orange-600',
    bgColorTo: 'red-700'
  }
];
