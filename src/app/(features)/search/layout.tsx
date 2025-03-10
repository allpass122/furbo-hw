import SearchBar from './_component/SearchBar';

export default function SearchLayout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <SearchBar />
      {children}
    </div>
  );
}
