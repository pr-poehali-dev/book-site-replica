
import { Link } from 'react-router-dom';

type Author = {
  id: string;
  name: string;
  books: number;
  image: string;
};

interface PopularAuthorsProps {
  authors: Author[];
}

const PopularAuthors = ({ authors }: PopularAuthorsProps) => {
  return (
    <ul className="space-y-4">
      {authors.map(author => (
        <li key={author.id} className="flex items-center gap-3">
          <img 
            src={author.image} 
            alt={author.name} 
            className="w-10 h-10 rounded-full object-cover" 
          />
          <div>
            <Link to={`/author/${author.id}`} className="font-medium text-sm hover:text-indigo-600">
              {author.name}
            </Link>
            <p className="text-xs text-gray-500">{author.books} книг</p>
          </div>
        </li>
      ))}
      <li className="text-center pt-2">
        <Link to="/authors" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
          Все авторы →
        </Link>
      </li>
    </ul>
  );
};

export default PopularAuthors;
