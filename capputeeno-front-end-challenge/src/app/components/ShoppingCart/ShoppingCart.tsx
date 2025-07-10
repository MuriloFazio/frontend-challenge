import React from "react";

import {
  CartContainer,
  CartCountWrapper,
  CartCountNumber,
} from "./styles";

import { ShoppingBag } from "../../assets/ShoppingBag";
import { usePersistedCounter } from "@/app/hooks/useLocalStorage";

export const ShoppingCart: React.FC = () => {
  const { count } = usePersistedCounter('item', 0);

  return (
    <CartContainer>
      <ShoppingBag />
      {
        count > 0 && 
        <CartCountWrapper>
          <CartCountNumber>{count}</CartCountNumber>
        </CartCountWrapper>
      }
    </CartContainer>
  )
};

export default ShoppingCart;
