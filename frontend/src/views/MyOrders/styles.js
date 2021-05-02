import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0 0;
`;

export const Header = styled.div`
    background-color: white;
`;

export const Wrapper = styled.div`
    text-align: center;
    margin-top: 40px;

    @media screen and (min-width: 992px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const Row = styled.tr`
    background-color: white;
    border-radius: 20px;
    margin-bottom: 15px;
`;

export const Data = styled.td`
    text-align: center;
    padding: 20px 10px;
    min-width: 140px;

    :first-child {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
    
    :last-child {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    @media screen and (min-width: 992px) {
        min-width: auto;
    }
`;
