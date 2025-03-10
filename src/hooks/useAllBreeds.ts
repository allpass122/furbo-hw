import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';

const allBreedsSchema = z.object({
  message: z.record(z.string(), z.array(z.string())),
  status: z.string(),
});

export const useAllBreeds = () => {
  return useQuery({
    queryKey: ['allBreeds'],
    queryFn: async () => {
      const response = await fetch('https://dog.ceo/api/breeds/list/all');
      const data = await response.json();
      return Object.keys(allBreedsSchema.parse(data).message);
    },
  });
};
