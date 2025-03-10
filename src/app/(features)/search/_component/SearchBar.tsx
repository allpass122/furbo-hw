'use client';

import { SearchIcon, XIcon } from 'lucide-react';
import { useQueryState } from 'nuqs';
import { debounce } from 'lodash';
import { useCallback, useState } from 'react';

export default function SearchBar() {
  const [search, setSearch] = useQueryState('s', { defaultValue: '' });
  const [inputValue, setInputValue] = useState(search ?? '');

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setSearch(value || null);
    }, 1000),
    [setSearch]
  );

  return (
    <div className="border-[10px] border-primary bg-primary-background flex items-center justify-between">
      <label className="flex items-center gap-1 p-1">
        <SearchIcon className="h-4 w-4 cursor-pointer" />
        <input
          className="outline-none w-full bg-transparent"
          type="text"
          placeholder="Click to search"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            debouncedSearch(e.target.value);
          }}
        />
      </label>
      <button
        className="text-primary-background p-1"
        onClick={() => {
          setInputValue('');
          setSearch(null);
        }}
      >
        <XIcon className="h-4 w-4 cursor-pointer" />
      </button>
    </div>
  );
}
