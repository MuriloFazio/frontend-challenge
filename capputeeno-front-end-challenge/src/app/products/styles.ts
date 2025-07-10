import styled from "styled-components";
import Link from "next/link";

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const BackButtonWrapper = styled(Link)`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-dark);
    width: fit-content;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    text-decoration: none;
`;
