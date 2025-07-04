import styled from "styled-components";
import Link from "next/link";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between; 
    padding: 20px 160px;
    
`;

export const HeaderText = styled(Link)`
    color: var(--logo-color);
    font-size: 40px;
    line-height: 150%;
`;
