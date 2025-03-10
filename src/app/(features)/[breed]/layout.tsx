import { ChevronLeftIcon } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import * as _ from 'lodash';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ breed: string }>;
}): Promise<Metadata> {
  const { breed } = await params;
  return {
    title: `Furbo Dog Photos | ${_.capitalize(breed)}`,
  };
}

export default async function BreedLayout({
  children,
  params,
}: React.PropsWithChildren<{ params: Promise<{ breed: string }> }>) {
  const { breed } = await params;

  return (
    <div className="flex flex-col h-screen">
      <div className="relative h-14 bg-primary flex items-center justify-between px-4">
        <Link href="/search" className="absolute left-4">
          <ChevronLeftIcon className="size-6 cursor-pointer hover:border-2 hover:border-primary-background" />
        </Link>
        <span className="font-bold text-xl mx-auto">{_.capitalize(breed)}</span>
      </div>
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
