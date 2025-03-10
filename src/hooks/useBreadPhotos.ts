// * This file is not used, because I use ssr instead.

// import { useQuery } from '@tanstack/react-query';
// import { z } from 'zod';

// const breedPhotosSchema = z.object({
//   message: z.array(z.string()),
//   status: z.string(),
// });

// export const useBreadPhotos = (breed: string) => {
//   return useQuery({
//     queryKey: ['breadPhotos', breed],
//     queryFn: async () => {
//       const response = await fetch(
//         `https://dog.ceo/api/breed/${breed.toLowerCase()}/images/random/50`
//       );
//       const data = await response.json();
//       return breedPhotosSchema.parse(data).message;
//     },
//     // refetchOnMount: false,
//     // refetchOnReconnect: false,
//     refetchOnWindowFocus: false,
//     staleTime: Infinity,
//   });
// };
