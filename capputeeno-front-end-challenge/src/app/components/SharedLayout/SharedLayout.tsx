"use client";

import { FilterContextProvider } from "@/app/contexts/filterContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode } from "react";

export const SharedLayout: React.FC<{children: ReactNode}> = ({ children }) => {
  const client = new QueryClient();
  return (
    <>
      <QueryClientProvider client={client}>
        <FilterContextProvider>
          {children}
        </FilterContextProvider>
      </QueryClientProvider>
    </>
  )
};

export default SharedLayout;