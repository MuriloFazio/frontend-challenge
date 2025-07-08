import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
`;

export const CartCountWrapper = styled.div`
  position: absolute;
`;

export const CartCountNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: var(--delete-color);
  color: white;
  position: relative;
  top: 16px;
  left: 8px;
`;

