import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    background-color: white;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`

export const NavLinks = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 25px;
`;

export const NavLink = styled(Link)`
    cursor: pointer;
    padding: 10 15px;
`;