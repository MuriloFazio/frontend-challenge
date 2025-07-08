"use client";

import React from "react";
import { Saira_Stencil_One } from "next/font/google";

const sairaStencilOne = Saira_Stencil_One({
  weight: ['400'],
  subsets: ["latin"],
});

import {
    HeaderContainer,
    HeaderText,
    InputBagWrapper,
} from "./styles";

import { Input } from "../Input";

import { ShoppingCart } from "../ShoppingCart";

export const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <HeaderText href={'/'} className={sairaStencilOne.className}>Capputeeno</HeaderText>
            <InputBagWrapper>
                <Input placeholder="Procurando por algo específico?"></Input>
                <ShoppingCart></ShoppingCart>
            </InputBagWrapper>
        </HeaderContainer>
    )
};

export default Header;