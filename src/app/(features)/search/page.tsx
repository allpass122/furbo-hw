'use client';

import { useAllBreeds } from '@/hooks/useAllBreeds';
import { useQueryState } from 'nuqs';
import BreedCard from './_component/BreedCard';

export default function SearchPage() {
  const [search] = useQueryState('s', { defaultValue: '' });
  const { data: breeds, isLoading, error } = useAllBreeds();

  // todo: skeleton
  if (isLoading) return null;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {breeds
        ?.filter((breed) => breed.includes(search))
        // .slice(0, 10)
        .map((breed) => (
          <BreedCard key={breed} breed={breed} />
        ))}
    </div>
  );
}
