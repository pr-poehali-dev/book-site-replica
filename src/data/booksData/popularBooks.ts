
import { Book } from "../../types/bookTypes";

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
