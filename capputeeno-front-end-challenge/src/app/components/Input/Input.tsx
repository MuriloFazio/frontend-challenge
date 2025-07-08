"use client";

import React from "react";

import {
  InputContainer,
  SearchIconWrapper,
  Container,
} from "./styles";

import { InputProps } from "./types";
import { SearchIcon } from "../../assets/SearchIcon";

export const Input: React.FC<InputProps> = ({
  placeholder,
}) => {

  return (
    <Container>
      <InputContainer placeholder={placeholder}></InputContainer>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </Container>
  )
};

export default Input;
