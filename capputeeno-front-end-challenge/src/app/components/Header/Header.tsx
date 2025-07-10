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
import { useFilter } from "@/app/hooks/useFilter";

export const Header: React.FC = () => {
    const { search, setSearch} = useFilter();
    return (
        <HeaderContainer>
            <HeaderText href={'/'} className={sairaStencilOne.className}>Capputeeno</HeaderText>
            <InputBagWrapper>
                <Input 
                    placeholder="Procurando por algo específico?" 
                    handleChange={setSearch} 
                    value={search}></Input>
                <ShoppingCart></ShoppingCart>
            </InputBagWrapper>
        </HeaderContainer>
    )
};

export default Header;