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
  value,
  handleChange,
}) => {

  return (
    <Container>
      <InputContainer 
        placeholder={placeholder} 
        onChange={(event) => handleChange(event.target.value)}
        value={value}
      ></InputContainer>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </Container>
  )
};

export default Input;
