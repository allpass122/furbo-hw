import { useQuery } from '@tanstack/react-query';

export const useBreadRandomPhoto = (breed: string) => {
  return useQuery({
    queryKey: ['breadRandomPhoto', breed],
    queryFn: async () => {
      const response = await fetch(
        `https://dog.ceo/api/breed/${breed.toLowerCase()}/images/random`
      );
      const data = await response.json();
      return data.message;
    },
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};
