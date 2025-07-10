"use client";

import { PageContainer, BackButtonWrapper } from "./styles";
import { BackButtonIcon } from "@/app/assets/BackButton";
import { useProduct } from "../hooks/useProduct";
import React from "react";
import { ProductInfo } from "../components/ProductInfo";

export default function Products(params: { searchParams: { id: string } }) {
  const { data } = useProduct(params.searchParams.id);
  return (
    <div>
        <PageContainer>
          <BackButtonWrapper href={'/'}>
            <BackButtonIcon />
            voltar
          </BackButtonWrapper>
          {
            data && <ProductInfo 
              category={data ? data.category : ""} 
              title={data ? data?.name : ""} 
              price={data ? data.price_in_cents : 0} 
              description={data ? data.description : ""} 
              imageUrl={data ? data .image_url : ""} />
          }
        </PageContainer>
    </div>
  )
};
