import styled from "styled-components";
import { BaseButton, InvertedButton, GoogleSigninButton } from "../button/button.styles";
export const CartDropdownContainer = styled.div`
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    position: absolute;
    top: 102px;
    right: 40px;
    z-index: 5;

    @media (max-width: 639px) {
        top: 91px;
        right: 13px;
    }

    @media (min-width: 640px) and (max-width: 767px) {
        top: 92px;
        right: 15px;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        top: 96px;
        right: 25px;
    }

    @media (min-width: 1536px) {
        top: 107px;
        right: 50px;
    }

    ${BaseButton}, ${InvertedButton}, ${GoogleSigninButton} {
        margin-top: auto;
        text-transform: capitalize;
        font-size: 12px;
    }

`;

export const EmptyMessage = styled.span`
    font-size: 12px;
    margin: 50px auto;
`;

export const CartItems = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    color: black;
`;
