"use client"

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, ReactNode, useState } from "react";

export enum FilterType {
  'ALL',
  'SHIRT',
  'MUG',
};

export enum PriorityType {
  'BEST_SELLER',
  'NEWS',
  'MINOR_PRICE',
  'BIGGEST_PRICE',
};

export const FilterContext = createContext({
  search: '',
  page: 0,
  type: FilterType.ALL,
  priority: PriorityType.NEWS,
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterType) => {},
  setPriority: (value: PriorityType) => {},
});

type ProviderProps = {
  children: ReactNode;
}

export function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [type, setType] = useState(FilterType.ALL);
  const [priority, setPriority] = useState(PriorityType.BEST_SELLER);

  return (
    <FilterContext.Provider value={{
      search,
      setSearch,
      page,
      setPage,
      type,
      setType,
      priority,
      setPriority
    }}>
      {children}
    </FilterContext.Provider>
  );
}