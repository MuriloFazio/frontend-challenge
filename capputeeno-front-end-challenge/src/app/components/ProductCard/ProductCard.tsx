import { ProductCardProps } from "./types";

import Image from "next/image";

import {
  CardContainer,
  ProductImageWrapper,
  ProductInfoWrapper,
  ProductName,
  ProductValue,
  Separator,
} from "./styles";
import { currencyFormatter } from "@/app/utils/formatters/currencyFormatter";

export const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, name, price}) => {
  const formattedPrice = currencyFormatter(price);
  return (
    <CardContainer>
      <ProductImageWrapper>
        <Image alt={name} src={imageUrl} width={256} height={300} style={{borderTopLeftRadius: '8px 8px', borderTopRightRadius: '8px 8px',}}/>
      </ProductImageWrapper>
      <ProductInfoWrapper>
        <ProductName>{name}</ProductName>
        <Separator></Separator>
        <ProductValue>{formattedPrice}</ProductValue>
      </ProductInfoWrapper>
    </CardContainer>
  )
};

export default ProductCard;
