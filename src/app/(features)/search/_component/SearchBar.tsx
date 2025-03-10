'use client';

import { SearchIcon, XIcon } from 'lucide-react';
import { useQueryState } from 'nuqs';
import { debounce } from 'lodash';
import { useCallback, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export default function SearchBar() {
  const [search, setSearch] = useQueryState('s', { defaultValue: '' });
  const inputRef = useRef<HTMLInputElement>(null);

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setSearch(value || null);
    }, 1000),
    [setSearch]
  );
  return (
    <div className="border-[10px] h-14 border-primary bg-primary-background flex items-center justify-between">
      <label className="flex items-center gap-1 p-1 w-full">
        <SearchIcon className="h-4 w-4 cursor-pointer" />
        <input
          className="outline-none w-full bg-transparent"
          type="text"
          placeholder="Click to search"
          ref={inputRef}
          onChange={(e) => {
            debouncedSearch(e.target.value);
          }}
        />
      </label>
      <button
        className={twMerge(
          'text-primary-background p-1',
          inputRef.current?.value === '' && 'hidden'
        )}
        onClick={() => {
          if (inputRef.current) {
            inputRef.current.value = '';
          }
          setSearch(null);
        }}
      >
        <XIcon className="h-4 w-4 cursor-pointer" />
      </button>
    </div>
  );
}
