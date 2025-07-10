"use client";

import React from "react";

import {
  ProductItem,
  ProductsList,
} from './styles';
import { useFilter } from "@/app/hooks/useFilter";
import { FilterType } from "@/app/contexts/filterContext";

export const ProductsFilter: React.FC = () => {
  const { type, setType } = useFilter();

  return (
    <ProductsList>
      <ProductItem
        isSelected={type === FilterType.ALL}
        onClick={() => setType(FilterType.ALL)}>
        Todos os produtos
      </ProductItem>
      <ProductItem
        isSelected={type === FilterType.SHIRT}
        onClick={() => setType(FilterType.SHIRT)}>
        Camisetas
      </ProductItem>
      <ProductItem
        isSelected={type === FilterType.MUG}
        onClick={() => setType(FilterType.MUG)}>
        Canecas
      </ProductItem>
    </ProductsList>
  )
};

export default ProductsFilter;
