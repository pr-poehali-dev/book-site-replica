
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';

interface Collection {
  id: string;
  title: string;
  description: string;
  bgColorFrom: string;
  bgColorTo: string;
}

interface ThematicCollectionsProps {
  collections: Collection[];
}

const ThematicCollections = ({ collections }: ThematicCollectionsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {collections.map(collection => (
        <Card key={collection.id} className="overflow-hidden">
          <div className={`relative h-40 bg-gradient-to-r from-${collection.bgColorFrom} to-${collection.bgColorTo}`}>
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <h3 className="text-2xl font-bold text-white">{collection.title}</h3>
            </div>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-600 mb-4">{collection.description}</p>
            <Button variant="outline" className="w-full">
              <PlayCircle className="mr-2 h-4 w-4" /> Перейти к коллекции
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ThematicCollections;
