"use client";

import React from "react";
import { Saira_Stencil_One } from "next/font/google";

const sairaStencilOne = Saira_Stencil_One({
  weight: ['400'],
  subsets: ["latin"],
});


import { HeaderProps } from "./types";

import {
    HeaderContainer,
    HeaderText,
} from "./styles";

export const Header: React.FC<HeaderProps> = ({
    // name
}) => {
    return (
        <HeaderContainer>
            <HeaderText href={'/'} className={sairaStencilOne.className}>Capputeeno</HeaderText>
            <div> Carrinho</div>
        </HeaderContainer>
    )
};

export default Header;