
export interface Book {
  id: string;
  title: string;
  author: string;
  narrator: string;
  coverUrl: string;
  rating: number;
  duration: string;
  faction?: string;
  isNew?: boolean;
  description?: string;
  releaseDate?: string;
  series?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  imageUrl?: string;
}

export const factions = [
  { id: "1", name: "Империум Человечества", slug: "imperium" },
  { id: "2", name: "Хаос", slug: "chaos" },
  { id: "3", name: "Эльдар", slug: "eldar" },
  { id: "4", name: "Орки", slug: "orks" },
  { id: "5", name: "Тираниды", slug: "tyranids" },
  { id: "6", name: "Некроны", slug: "necrons" },
  { id: "7", name: "Т'ау", slug: "tau" },
  { id: "8", name: "Инквизиция", slug: "inquisition" },
];

export const series = [
  { id: "1", name: "Ересь Хоруса", slug: "horus-heresy" },
  { id: "2", name: "Тёмный Империум", slug: "dark-imperium" },
  { id: "3", name: "Хроники Эйзенхорна", slug: "eisenhorn" },
  { id: "4", name: "Космические Волки", slug: "space-wolves" },
  { id: "5", name: "Ночные Властелины", slug: "night-lords" },
];

export const featuredBooks: Book[] = [
  {
    id: "1",
    title: "Ересь Хоруса: Возвышение",
    author: "Дэн Абнетт",
    narrator: "Тоби Лонгворт",
    coverUrl: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=2080&auto=format&fit=crop",
    rating: 4.9,
    duration: "15 ч 23 мин",
    faction: "Империум Человечества",
    isNew: true,
    description: "Начало великой саги о предательстве Воителя и падении Империума в пучину гражданской войны."
  },
  {
    id: "2",
    title: "Ангел Экстерминатус",
    author: "Грэм Макнилл",
    narrator: "Джонатан Кинан",
    coverUrl: "https://images.unsplash.com/photo-1578845482164-3c89d43d019f?q=80&w=2079&auto=format&fit=crop",
    rating: 4.7,
    duration: "12 ч 45 мин",
    faction: "Хаос",
    series: "Ересь Хоруса"
  },
  {
    id: "3",
    title: "Легион Альфа",
    author: "Роб Сандерс",
    narrator: "Марк Элстоб",
    coverUrl: "https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?q=80&w=2080&auto=format&fit=crop",
    rating: 4.6,
    duration: "11 ч 32 мин",
    faction: "Империум Человечества",
    series: "Ересь Хоруса"
  },
  {
    id: "4",
    title: "Инквизитор",
    author: "Дэн Абнетт",
    narrator: "Гарет Армстронг",
    coverUrl: "https://images.unsplash.com/photo-1531026383433-22d313571f28?q=80&w=2070&auto=format&fit=crop",
    rating: 4.8,
    duration: "14 ч 15 мин",
    faction: "Инквизиция",
    series: "Хроники Эйзенхорна"
  },
];

export const newReleases: Book[] = [
  {
    id: "5",
    title: "Тёмный Империум: Чумная Война",
    author: "Гай Хейли",
    narrator: "Джон Бэнкс",
    coverUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2134&auto=format&fit=crop",
    rating: 4.5,
    duration: "13 ч 05 мин",
    faction: "Империум Человечества",
    isNew: true,
    series: "Тёмный Империум"
  },
  {
    id: "6",
    title: "Владыка Ночи",
    author: "Аарон Дембски-Боуден",
    narrator: "Андрю Уинкотт",
    coverUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=2059&auto=format&fit=crop",
    rating: 4.7,
    duration: "10 ч 55 мин",
    faction: "Хаос",
    isNew: true,
    series: "Ночные Властелины"
  },
  {
    id: "7",
    title: "Зов Разорителя",
    author: "Роберт Ректор",
    narrator: "Эмма Грегори",
    coverUrl: "https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?q=80&w=2187&auto=format&fit=crop",
    rating: 4.3,
    duration: "9 ч 47 мин",
    faction: "Орки",
    isNew: true
  },
  {
    id: "8",
    title: "Путь Провидца",
    author: "Гэв Торп",
    narrator: "Джеймс Макферсон",
    coverUrl: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=2070&auto=format&fit=crop",
    rating: 4.4,
    duration: "11 ч 23 мин",
    faction: "Эльдар",
    isNew: true
  },
];

export const popularBooks: Book[] = [
  {
    id: "9",
    title: "Пробуждение Некронтир",
    author: "Ники Ним",
    narrator: "Ричард Рид",
    coverUrl: "https://images.unsplash.com/photo-1620336655081-e10e6ff631c2?q=80&w=2070&auto=format&fit=crop",
    rating: 4.6,
    duration: "12 ч 33 мин",
    faction: "Некроны"
  },
  {
    id: "10",
    title: "Фаланга Крови",
    author: "Ник Кайм",
    narrator: "Майкл Гест",
    coverUrl: "https://images.unsplash.com/photo-1649880188290-cf2e7a6e51b7?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9,
    duration: "11 ч 15 мин",
    faction: "Империум Человечества",
    series: "Ересь Хоруса"
  },
  {
    id: "11",
    title: "Путь Большого Зуба",
    author: "Майк Брукс",
    narrator: "Том Александр",
    coverUrl: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?q=80&w=1974&auto=format&fit=crop",
    rating: 4.2,
    duration: "8 ч 59 мин",
    faction: "Орки"
  },
  {
    id: "12",
    title: "Аватар Кхейна",
    author: "Гэв Торп",
    narrator: "Эмма Грегори",
    coverUrl: "https://images.unsplash.com/photo-1543332143-4e8c27e3256f?q=80&w=1974&auto=format&fit=crop",
    rating: 4.5,
    duration: "10 ч 42 мин",
    faction: "Эльдар"
  },
];
