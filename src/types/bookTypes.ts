
export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  status: "published" | "draft" | "processing";
  cover: string;
  dateAdded: string;
}
