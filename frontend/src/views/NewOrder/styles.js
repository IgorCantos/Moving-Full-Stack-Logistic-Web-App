import styled from 'styled-components';

export const Row = styled.div`
    @media screen and (min-width: 992px) {
        display: flex;
        width: 100%;
    }
`;

export const FormWrapper = styled.div`
    height: 650px;
    width: 100%;

    @media screen and (min-width: 992px) {
        width: 40%;
    }

    @media screen and (min-width: 1200px) {
        width: 30%;
    }
`;
