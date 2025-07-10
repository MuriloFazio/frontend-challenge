import styled from "styled-components";
import Image from "next/image";

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media(min-width: 768px) {
    flex-direction: row;
  }
`;

export const ImageWrapper = styled.div`
  position: re;lative;
  width: 100%
  @media(min-width: 768px) {
    width: 50%;
  }
`;

export const StyledImage = styled(Image)`
  border-radius: 4px;
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 448px;
  padding-left: 32px;
`;

export const ProductCategory = styled.p`
  color: var(--text-darker);
  font-family: inherit;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-transform: capitalize;
  margin-bottom: 12px;
`;

export const ProductTile = styled.p`
  color: var(--text-darker);
  font-family: inherit;
  font-weight: 300;
  font-size: 32px;
  line-height: 150%;
  margin-bottom: 4px;
`;

export const ProductPrice = styled.p`
  color: var(--text-price);
  font-family: Saira;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  margin-bottom: 24px;
`;

export const InformativeText = styled.p`
  color: var(--text-darker);
  font-family: inherit;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  margin-bottom: 58px;
`;

export const DescriptionText = styled.p`
  color: var(--text-dark);
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

export const ProductDescription = styled.p`
  color: var(--text-darker);
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  flex-grow: 1;
`;

export const StyledButton = styled.button`
  display: flex;
  color: var(--shape-light);
  background-color: var(--brand-color);
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-transform: uppercase;
  border-radius: 4px;
  border: none;
  align-items: center;
  justify-content: center;
  gap: 12px;
  height: 44px;
  cursor: pointer;
`;
