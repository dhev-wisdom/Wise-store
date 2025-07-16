import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
    height: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FormContainer = styled.form`
    height: auto;
    width: auto;
`;

export const PaymentButton = styled(Button)`
    margin-left: auto;
    margin-top: 30px;
`