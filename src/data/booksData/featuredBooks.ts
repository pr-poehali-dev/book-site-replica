
import { Book } from "../../types/bookTypes";

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
