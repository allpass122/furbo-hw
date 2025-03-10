import SearchBar from './_component/SearchBar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Furbo Dog Photos | Search',
};

export default function SearchLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex flex-col h-screen">
      <SearchBar />
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
