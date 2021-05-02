import styled from 'styled-components';

export const TableWrapper = styled.div`
    overflow-x: scroll;

    @media screen and (min-width: 992px) {
        overflow: hidden;
    }
`;

export const Table = styled.table`
    width: 100%;
    margin: 30px 0;
    font-weight: normal;
    overflow-x: scroll;
    border-collapse: separate;
    border-spacing: 0 16px;
`;
