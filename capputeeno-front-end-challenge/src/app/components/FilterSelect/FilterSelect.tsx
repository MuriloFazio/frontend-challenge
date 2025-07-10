"use client";

import React, { useState } from "react";

import {
  FilterContainer,
  Filtertext,
  FilterButton,
  FilterDropdown,
  DropdownOption,
} from './styles';

import { ArrowDown } from '../../assets/ArrowDown';
import { useFilter } from "@/app/hooks/useFilter";
import { PriorityType } from "@/app/contexts/filterContext";

export const FilterSelect: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setPriority } = useFilter();

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handlePriorityChange = (value: PriorityType) => {
    setPriority(value);
    setIsOpen(false);
  }

  return (
    <FilterContainer>
      <FilterButton onClick={handleDropdown}>
        <Filtertext>Organizar por:</Filtertext>
        <ArrowDown />
      </FilterButton>
      {
        isOpen && 
        <FilterDropdown>
          <DropdownOption onClick={() => handlePriorityChange(PriorityType.NEWS)}>Novidades</DropdownOption>
          <DropdownOption onClick={() => handlePriorityChange(PriorityType.BIGGEST_PRICE)}>Preço: Maior - menor</DropdownOption>
          <DropdownOption onClick={() => handlePriorityChange(PriorityType.LOWEST_PRICE)}>Preço: Menor - maior</DropdownOption>
          <DropdownOption onClick={() => handlePriorityChange(PriorityType.BEST_SELLER)}>Mais vendidos</DropdownOption>
        </FilterDropdown>
      }
    </FilterContainer>
  )
};

export default FilterSelect;
