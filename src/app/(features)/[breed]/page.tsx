import { unstable_cache } from 'next/cache';
import { z } from 'zod';
import PhotoGrid from './components/PhotoGrid';

const breedPhotosSchema = z.object({
  message: z.array(z.string()),
  status: z.string(),
});

async function getPhotos(breed: string) {
  const getCachedPhotos = unstable_cache(
    async () => {
      const response = await fetch(
        `https://dog.ceo/api/breed/${breed.toLowerCase()}/images/random/50`
      );
      const data = await response.json();
      return breedPhotosSchema.parse(data).message;
    },
    [`breed-photos-${breed}`],
    {
      revalidate: 3600,
      tags: [`breed-${breed}`],
    }
  );

  return getCachedPhotos();
}

export default async function BreedPage({
  params,
}: {
  params: Promise<{ breed: string }>;
}) {
  const { breed } = await params;
  const photos = await getPhotos(breed);

  return <PhotoGrid photos={photos} />;
}
