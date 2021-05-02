import styled from 'styled-components'

export const Button = styled.button`
    background-color: ${props => props.dark ? '#333333' : '#FF9400'};
    color: white;
    text-align: center;
    max-width: ${props => props.maxWidth || '100%'};
    width: ${props => props.width || '100%'};
    padding: 10px 25px;
    margin: 10px 0;
    border: 0px;
    border-radius: 15px;
    font-weight: bold;
    font-size: ${props => props.fontSize || '16px'};
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        transition: 0.3s;
        background-color: #c5780c;
    }
`