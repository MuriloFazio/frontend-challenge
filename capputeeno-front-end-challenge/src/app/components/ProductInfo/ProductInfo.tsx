import React from "react";
import {
  ProductInfoContainer,
  ImageWrapper, 
  StyledImage,
  ProductInfoWrapper,
  ProductCategory,
  ProductTile,
  ProductPrice,
  InformativeText,
  ProductDescription,
  DescriptionText,
  StyledButton,
} from "./styles";

import { ProductInfoProps } from "./types";

import { currencyFormatter, categoryFormatter } from '@/app/utils/formatters/currencyFormatter';

import { ShoppingBag } from "@/app/assets/ShoppingBag";
import { usePersistedCounter } from "@/app/hooks/useLocalStorage";

export const ProductInfo: React.FC<ProductInfoProps> = ({
  category,
  title,
  price,
  description,
  imageUrl,
}) => {
  
  const { increment } = usePersistedCounter('item', 0);
  const handleAddToCart = () => increment();

  return (
    <ProductInfoContainer>
      <ImageWrapper>
        <StyledImage 
          alt={category} 
          src={imageUrl} 
          width={640}
          height={580}
          priority
        />
      </ImageWrapper>
      <ProductInfoWrapper>
        <ProductCategory>{categoryFormatter(category)}</ProductCategory>
        <ProductTile>{title}</ProductTile>
        <ProductPrice>{currencyFormatter(price)}</ProductPrice>
        <InformativeText>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</InformativeText>
        <DescriptionText>Descrição</DescriptionText>
        <ProductDescription>{description}</ProductDescription>
        <StyledButton onClick={handleAddToCart}>
          <ShoppingBag />
          Adicionar ao carrinho
        </StyledButton>
      </ProductInfoWrapper>
    </ProductInfoContainer>
  )
};

export default ProductInfo;
