import { DOG_API_URL } from '@/const';
import Image from 'next/image';

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);
  const [breed, name] = decodedId.split('+');
  return (
    <>
      <Image
        src={`${DOG_API_URL}${breed}/${name}`}
        alt={`dog-image-${breed}-${name}`}
        fill
        objectFit="contain"
      />
    </>
  );
}
