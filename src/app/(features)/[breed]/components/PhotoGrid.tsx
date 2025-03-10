'use client';

import { ChevronLeftIcon, ChevronRightIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function PhotoGrid({ photos }: { photos: string[] }) {
  const [open, setOpen] = useState(false);
  const [currIndex, setCurrIndex] = useState(0);

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
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <XIcon className="size-6 text-white" />
          </button>
          <button
            className="absolute left-4 -translate-x-1/2 -translate-y-1/2"
            onClick={() =>
              setCurrIndex((curr) =>
                curr === 0 ? photos.length - 1 : curr - 1
              )
            }
          >
            <ChevronLeftIcon className="size-6 text-white" />
          </button>
          <div className="size-[250px] relative">
            <Image
              src={photos[currIndex]}
              alt={photos[currIndex]}
              fill
              sizes="100%"
            />
          </div>
          <button
            className="absolute right-4 translate-x-1/2 -translate-y-1/2"
            onClick={() =>
              setCurrIndex((curr) =>
                curr === photos.length - 1 ? 0 : curr + 1
              )
            }
          >
            <ChevronRightIcon className="size-6 text-white" />
          </button>
        </div>
      )}
    </>
  );
}
