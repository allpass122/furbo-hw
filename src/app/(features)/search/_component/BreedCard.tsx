'use client';

import { useBreadRandomPhoto } from '@/hooks/useBreadRandomPhoto';
import Image from 'next/image';

function Avatar({ src, breed }: { src: string; breed: string }) {
  return (
    <div className="relative size-[60px]" aria-label="image-container">
      <Image
        src={src}
        alt={breed}
        fill
        className="rounded-full"
        objectFit="cover"
      />
    </div>
  );
}

export default function BreedCard({ breed }: { breed: string }) {
  const { data: randomImageUrl, isLoading } = useBreadRandomPhoto(breed);

  return (
    <div className="flex p-2 gap-4 items-center border-b border-primary-background">
      <Avatar src={isLoading ? '/bonk.jpeg' : randomImageUrl} breed={breed} />
      <span className="font-bold">{breed}</span>
    </div>
  );
}
