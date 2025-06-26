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
    top: 90px;
    right: 40px;
    z-index: 5;

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
