
import { Book, Category } from "../types/bookTypes";

export const categories: Category[] = [
  { id: "1", name: "Фантастика", slug: "fantasy", count: 1240 },
  { id: "2", name: "Детективы", slug: "detective", count: 980 },
  { id: "3", name: "Ужасы", slug: "horror", count: 645 },
  { id: "4", name: "История", slug: "history", count: 590 },
  { id: "5", name: "Романы", slug: "romance", count: 822 },
  { id: "6", name: "Бизнес", slug: "business", count: 410 },
  { id: "7", name: "Психология", slug: "psychology", count: 735 },
  { id: "8", name: "Саморазвитие", slug: "self-development", count: 694 },
  { id: "9", name: "Приключения", slug: "adventure", count: 521 },
  { id: "10", name: "Классика", slug: "classics", count: 430 },
];

export const featuredBooks: Book[] = [
  {
    id: "1",
    title: "Дюна",
    author: "Фрэнк Герберт",
    narrator: "Игорь Князев",
    category: "Фантастика",
    duration: "21 час 05 мин",
    coverImage: "https://images.unsplash.com/photo-1525498128493-380d1990a112?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.8,
    description: "Величайший научно-фантастический роман всех времен, ставший мировой классикой.",
    releaseDate: "10.03.2022",
    fileSize: "580 МБ",
    isFavorite: true,
    isNew: false,
    isPopular: true
  },
  {
    id: "2",
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    narrator: "Александр Клюквин",
    category: "Классика",
    duration: "16 час 49 мин",
    coverImage: "https://images.unsplash.com/photo-1603122876234-863cfd3379c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.9,
    description: "Роман о Понтии Пилате, дьяволе и бездомном философе Иванушке Бездомном.",
    releaseDate: "15.04.2022",
    fileSize: "460 МБ",
    isFavorite: true,
    isNew: false,
    isPopular: true
  },
  {
    id: "3",
    title: "1984",
    author: "Джордж Оруэлл",
    narrator: "Максим Суханов",
    category: "Фантастика",
    duration: "11 час 18 мин",
    coverImage: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.7,
    description: "Мрачная антиутопия о тоталитарном обществе и его последствиях.",
    releaseDate: "20.01.2022",
    fileSize: "320 МБ",
    isFavorite: false,
    isNew: false,
    isPopular: true
  },
  {
    id: "4",
    title: "Шерлок Холмс",
    author: "Артур Конан Дойл",
    narrator: "Кирилл Радциг",
    category: "Детективы",
    duration: "28 час 30 мин",
    coverImage: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.6,
    description: "Полное собрание рассказов о легендарном сыщике Шерлоке Холмсе.",
    releaseDate: "05.02.2022",
    fileSize: "780 МБ",
    isFavorite: false,
    isNew: false,
    isPopular: true
  }
];

export const newReleases: Book[] = [
  {
    id: "5",
    title: "Проект «Аве Мария»",
    author: "Энди Вейер",
    narrator: "Дмитрий Хазанович",
    category: "Фантастика",
    duration: "16 час 12 мин",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.5,
    description: "Новый научно-фантастический триллер от автора бестселлера «Марсианин».",
    releaseDate: "18.05.2023",
    fileSize: "450 МБ",
    isFavorite: false,
    isNew: true
  },
  {
    id: "6",
    title: "Кроличья нора",
    author: "Стивен Кинг",
    narrator: "Сергей Кузнецов",
    category: "Ужасы",
    duration: "14 час 57 мин",
    coverImage: "https://images.unsplash.com/photo-1633477189729-9290b3261d0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww",
    rating: 4.4,
    description: "Новый роман короля ужасов, рассказывающий о тёмных глубинах человеческого сознания.",
    releaseDate: "02.04.2023",
    fileSize: "410 МБ",
    isFavorite: false,
    isNew: true
  },
  {
    id: "7",
    title: "Атомные привычки",
    author: "Джеймс Клир",
    narrator: "Ирина Ерисанова",
    category: "Саморазвитие",
    duration: "7 час 40 мин",
    coverImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww",
    rating: 4.9,
    description: "Маленькие изменения, которые приведут к огромным результатам.",
    releaseDate: "15.03.2023",
    fileSize: "210 МБ",
    isFavorite: true,
    isNew: true
  },
  {
    id: "8",
    title: "Игра престолов",
    author: "Джордж Р.Р. Мартин",
    narrator: "Пётр Иващенко",
    category: "Фантастика",
    duration: "33 час 15 мин",
    coverImage: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww",
    rating: 4.8,
    description: "Эпическая фэнтези-сага о борьбе за власть в мире Семи Королевств.",
    releaseDate: "30.01.2023",
    fileSize: "910 МБ",
    isFavorite: false,
    isNew: true
  }
];

export const popularBooks: Book[] = [
  {
    id: "9",
    title: "Гарри Поттер и философский камень",
    author: "Дж.К. Роулинг",
    narrator: "Александр Клюквин",
    category: "Фантастика",
    duration: "8 час 50 мин",
    coverImage: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.9,
    description: "Первая книга о приключениях юного волшебника и его друзей.",
    releaseDate: "10.10.2021",
    fileSize: "245 МБ",
    isFavorite: true,
    isPopular: true
  },
  {
    id: "10",
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    narrator: "Иннокентий Смоктуновский",
    category: "Классика",
    duration: "22 час 40 мин",
    coverImage: "https://images.unsplash.com/photo-1610882648335-eda27ee1b5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.7,
    description: "Философский роман о моральной дилемме, преступлении и его последствиях.",
    releaseDate: "15.09.2021",
    fileSize: "620 МБ",
    isFavorite: false,
    isPopular: true
  },
  {
    id: "11",
    title: "Тонкое искусство пофигизма",
    author: "Марк Мэнсон",
    narrator: "Станислав Иванов",
    category: "Саморазвитие",
    duration: "5 час 30 мин",
    coverImage: "https://images.unsplash.com/photo-1641154748135-8032aa6d714a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.6,
    description: "Контринтуитивный подход к жизни и счастью через принятие негатива.",
    releaseDate: "20.08.2021",
    fileSize: "150 МБ",
    isFavorite: true,
    isPopular: true
  },
  {
    id: "12",
    title: "Сапиенс. Краткая история человечества",
    author: "Юваль Ной Харари",
    narrator: "Максим Суханов",
    category: "История",
    duration: "19 час 08 мин",
    coverImage: "https://images.unsplash.com/photo-1682687220088-ab185aa6c9d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8ODF8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.8,
    description: "Увлекательный рассказ о том, как человечество превратилось в доминирующий вид на Земле.",
    releaseDate: "01.07.2021",
    fileSize: "530 МБ",
    isFavorite: false,
    isPopular: true
  }
];

export const allBooks = [...featuredBooks, ...newReleases, ...popularBooks];
