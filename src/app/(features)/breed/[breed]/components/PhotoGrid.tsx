'use client';

import { ChevronLeftIcon, ChevronRightIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import { Suspense, useEffect, useState } from 'react';

const fadeAnimation = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

export default function PhotoGrid({ photos }: { photos: string[] }) {
  const [open, setOpen] = useState(false);
  const [currIndex, setCurrIndex] = useState(0);
  // todo: handle left and right arrow keys

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    if (open) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [open]);

  return (
    <>
      <style jsx global>
        {fadeAnimation}
      </style>
      <div className="grid gap-4 p-4 grid-cols-3">
        {photos?.map((photo, idx) => (
          <button
            key={photo}
            className="relative size-auto aspect-square"
            aria-label="image-container"
            onClick={() => {
              setOpen(true);
              setCurrIndex(idx);
            }}
          >
            <Image src={photo} alt={photo} fill sizes="100%" />
          </button>
        ))}
      </div>
      {!!open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 transition-all duration-300">
          <button
            className="absolute top-4 right-4 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <XIcon className="size-6 text-white" />
          </button>
          <button
            className="absolute left-2 lg:left-4 "
            onClick={() =>
              setCurrIndex((curr) =>
                curr === 0 ? photos.length - 1 : curr - 1
              )
            }
          >
            <ChevronLeftIcon className="size-6 text-white lg:size-8" />
          </button>
          <div className="w-[min(80vh,80vw)] aspect-square relative">
            <Suspense
              fallback={
                <Image
                  src={'/bonk.jpeg'}
                  alt={'placeholder'}
                  fill
                  sizes="100%"
                />
              }
            >
              <Image
                key={photos[currIndex]}
                src={photos[currIndex]}
                alt={photos[currIndex]}
                fill
                sizes="100%"
                className="animate-[fadeIn_0.3s_ease-in-out]"
              />
            </Suspense>
          </div>
          <button
            className="absolute right-2 lg:right-4 "
            onClick={() =>
              setCurrIndex((curr) =>
                curr === photos.length - 1 ? 0 : curr + 1
              )
            }
          >
            <ChevronRightIcon className="size-6 text-white lg:size-8" />
          </button>
        </div>
      )}
    </>
  );
}
