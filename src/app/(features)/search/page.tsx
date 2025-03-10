'use client';

import { useAllBreeds } from '@/hooks/useAllBreeds';
import { useQueryState } from 'nuqs';
import BreedCard from './_component/BreedCard';

export default function SearchPage() {
  const [search] = useQueryState('s', { defaultValue: '' });
  const { data: breeds, isLoading, error } = useAllBreeds();

  // todo: skeleton
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (breeds?.filter((breed) => breed.includes(search)).length === 0) {
    return (
      <div className="flex justify-center items-center mt-10">
        <span className="text-2xl font-bold text-orange-500">
          No breeds found
        </span>
      </div>
    );
  }

  return (
    <div>
      {breeds
        ?.filter((breed) => breed.includes(search))
        .map((breed) => (
          <BreedCard key={breed} breed={breed} />
        ))}
    </div>
  );
}
