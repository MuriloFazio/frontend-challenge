"use client"

import React from "react";

import { ProductsListContainer } from './styles';
import { useProducts } from "@/app/hooks/useProducts";
import { ProductCard } from "../ProductCard";


export const ProductsList: React.FC = () => {
  const { data } = useProducts();
  
  return (
    <ProductsListContainer>
      {data?.map((item) => (
        <ProductCard key={item.id} imageUrl={item.image_url} name={item.name} price={item.price_in_cents}/>
      ))}
    </ProductsListContainer>
  )
};

export default ProductsList;
