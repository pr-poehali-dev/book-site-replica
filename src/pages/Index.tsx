
import MainLayout from "@/components/layout/MainLayout";
import BookSection from "@/components/sections/BookSection";
import { featuredBooks, newReleases, popularBooks } from "@/data/booksData";

const Index = () => {
  return (
    <MainLayout>
      <BookSection title="Рекомендуемые" books={featuredBooks} />
      <BookSection title="Новинки" books={newReleases} />
      <BookSection title="Популярное" books={popularBooks} showSeparator={false} />
    </MainLayout>
  );
};

export default Index;
