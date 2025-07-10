import styled, { css } from "styled-components";

export const ProductsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  gap: 40px;
`;

export const ProductItem = styled.li<{ isSelected: boolean }>`
  font-family: inherit;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
  color: var(--text-dark);
  cursor: pointer;

  ${({ isSelected }) => (
    isSelected &&
    css`
        font-weight: 600;
        color: var(--text-darker);
        border-bottom: 4px solid var(--highlight-orange);
        `
  )}
    ;
  `;
