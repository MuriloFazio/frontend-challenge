"use client";

import { PageContainer, BackButtonWrapper } from "./styles";
import { BackButtonIcon } from "@/app/assets/BackButton";
import { useProduct } from "../hooks/useProduct";
import React from "react";

export default function Products(params: { searchParams: { id: string } }) {
  const { data } = useProduct(params.searchParams.id);
  return (
    <div>
        <PageContainer>
          <BackButtonWrapper href={'/'}>
            <BackButtonIcon />
            voltar
          </BackButtonWrapper>
          <div>
            <p>
              Componente com as infos do produto
            </p>
            <div>{params.searchParams.id}</div>
            {
              data &&
              <>
                <div>{data.category}</div>
                <div>{data.name}</div>
                <div>{data.description}</div>
                <div>{data.price_in_cents}</div>
              </>
            }
          </div>
        </PageContainer>
    </div>
  )
};
