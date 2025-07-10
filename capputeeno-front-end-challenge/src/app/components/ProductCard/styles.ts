import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top-left-radius: 8px 8px;
  border-top-right-radius: 8px 8px;
`;

export const ProductName = styled.p`
  font-family: inherit;
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  color: var(--text-darker);
  padding: 8px 12px;
`;

export const ProductValue = styled.p`
  font-family: inherit;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  color: var(--text-price);
  padding: 8px 12px;
`;

export const ProductImageWrapper = styled.div`
  width: 256px;
  height: 300px;
`;

export const Separator = styled.div`
  display: flex;
  height: 1px;
  width: 100%;
  max-width: 228px;
  background-color: var(--separator-line);
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`;
