
import { Link } from 'react-router-dom';

type Release = {
  id: string;
  title: string;
  author: string;
  releaseDate: string;
  coverUrl: string;
};

interface LatestReleasesProps {
  releases: Release[];
}

const LatestReleases = ({ releases }: LatestReleasesProps) => {
  return (
    <ul className="space-y-4">
      {releases.map(release => (
        <li key={release.id} className="flex gap-3">
          <img 
            src={release.coverUrl} 
            alt={release.title} 
            className="w-14 h-20 object-cover rounded-md" 
          />
          <div className="flex-1 min-w-0">
            <Link to={`/book/${release.id}`} className="font-semibold text-sm line-clamp-2 hover:text-indigo-600">
              {release.title}
            </Link>
            <p className="text-xs text-gray-600">{release.author}</p>
            <p className="text-xs text-gray-500 mt-1">{release.releaseDate}</p>
          </div>
        </li>
      ))}
      <li className="text-center pt-2">
        <Link to="/new-releases" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
          Все новинки →
        </Link>
      </li>
    </ul>
  );
};

export default LatestReleases;
