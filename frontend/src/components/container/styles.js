import styled from 'styled-components';

export const ContainerBlock = styled.div`
    width: 100%;
    max-width: ${props => props.fluid ? '100%' : '1280px' };
    padding: 5px 15px;
    margin: 0 auto;
`