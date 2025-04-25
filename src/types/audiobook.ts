
export interface Audiobook {
  id: string;
  title: string;
  author: string;
  narrator: string;
  duration: string;
  coverUrl: string;
  rating: number;
  genre: string;
  likes: number;
}

export interface Genre {
  id: string;
  name: string;
  count: number;
}

export interface Author {
  id: string;
  name: string;
  books: number;
  image: string;
}

export interface Release {
  id: string;
  title: string;
  author: string;
  releaseDate: string;
  coverUrl: string;
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  bgColorFrom: string;
  bgColorTo: string;
}
