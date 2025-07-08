import React from "react";

import {
  CartContainer,
  CartCountWrapper,
  CartCountNumber,
} from "./styles";

import { ShoppingBag } from "../../assets/ShoppingBag";
import { usePersistedCounter } from "@/app/hooks/useLocalStorage";

export const ShoppingCart: React.FC = () => {
  const { count, decrement, increment, reset} = usePersistedCounter('item', 0);
  const handleIncrement = () => increment();
  const handleDecrement = () => decrement();
  const handleReset = () => reset();

  return (
    <CartContainer>
      <ShoppingBag />
      {
        count > 0 && 
        <CartCountWrapper>
          <CartCountNumber>{count}</CartCountNumber>
        </CartCountWrapper>
      }

      <button onClick={handleIncrement}>aumenta</button>
      <button onClick={handleDecrement}>diminui</button>
      <button onClick={handleReset}>reseta</button>

    </CartContainer>
  )
};

export default ShoppingCart;
