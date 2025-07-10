import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Filtertext = styled.p`
  font-family: inherit;
  color: var(--text-dark);
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
`;

export const FilterButton = styled.button`
  display: flex;
  justify-content: space-between;
  background: transparent;
  border: none;
  cursor: pointer;
  gap: 16px;
  align-items: center;
`;

export const FilterDropdown = styled.ul`
  position: absolute;
  border-radius: 4px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  list-style: none;
  top: 24px;
  left: -60px;
  width: 200px;
  background-color: white;

  :last-child{
    margin: 0;
  }
`;

export const DropdownOption = styled.li`
  color: var(--text-dark);
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 4px;
  cursor: pointer;
`;
