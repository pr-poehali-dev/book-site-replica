
import { Link } from 'react-router-dom';

type Genre = {
  id: string;
  name: string;
  count: number;
};

interface GenreListProps {
  genres: Genre[];
}

const GenreList = ({ genres }: GenreListProps) => {
  return (
    <ul className="space-y-2">
      {genres.map(genre => (
        <li key={genre.id} className="flex justify-between items-center hover:bg-gray-50 p-2 rounded-md transition-colors">
          <Link to={`/category/${genre.id}`} className="font-medium text-gray-700 hover:text-indigo-600">
            {genre.name}
          </Link>
          <span className="text-xs text-gray-500 bg-gray-100 rounded-full px-2 py-1">{genre.count}</span>
        </li>
      ))}
      <li className="mt-4 text-center">
        <Link to="/categories" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
          Все категории →
        </Link>
      </li>
    </ul>
  );
};

export default GenreList;
