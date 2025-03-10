import ReactQueryProvider from '@/ReactQueryProvider';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import './globals.css';
import { Suspense } from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Furbo Dog Photos',
  description: 'Furbo Dog Photos',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        <ReactQueryProvider>
          <NuqsAdapter>
            <Suspense fallback={<div>Loading...</div>}>
              <div className="max-w-3/4 mx-auto border-x-2 border-neutral-200">
                {children}
              </div>
            </Suspense>
          </NuqsAdapter>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
