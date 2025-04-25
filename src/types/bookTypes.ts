
export interface Book {
  id: string;
  title: string;
  author: string;
  narrator: string;
  category: string;
  duration: string;
  coverImage: string;
  rating: number;
  description: string;
  releaseDate: string;
  fileSize: string;
  isFavorite?: boolean;
  isNew?: boolean;
  isPopular?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
}
