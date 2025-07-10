"use client";

import { ProductsFilter } from "./components/ProductsFilter";
import { FilterSelect } from "./components/FilterSelect";
import { ProductsList } from "./components/ProductsList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 34px 160px;
  min-height: 100vh;
  background-color: var(--background-page);
`;

export default function Home() {
  const client = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={client}>
        <StyledMain>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
            <ProductsFilter />
            <FilterSelect />
          </div>
          <ProductsList />
        </StyledMain>
      </QueryClientProvider>
    </div>
  );
};

