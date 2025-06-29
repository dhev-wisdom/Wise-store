import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    background-color: white;
    align-items: center;
    padding: 10px 0;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    padding: 0;
    margin: 5px 0 0 12px;
`

export const NavLinks = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    
    margin-right: 0;
`;

export const NavLink = styled(Link)`
    cursor: pointer;
    padding: 10 15px;
`;