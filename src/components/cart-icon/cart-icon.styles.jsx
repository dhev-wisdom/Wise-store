import styled from "styled-components";
import ShoppingSvg from '../../../public/assets/shopping-bag.svg?react';

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 34px;
  height: 34px;
  position: absolute;
`

export const CartIconContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const ItemCount = styled.span`
    position: absolute;
        font-size: 10px;
        bottom: 10px;
        font-weight: bold;
        color: black;
        z-index: 10;
`;