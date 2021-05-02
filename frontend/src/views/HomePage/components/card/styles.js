import styled from 'styled-components';

export const CardContainer = styled.div`
    background-color: white;
    min-height: 22rem;
    max-width: 22rem; 
    margin: 0px 15px;
    border-radius: 10px;
       
    &:hover {
        -webkit-box-shadow: 0px 5px 21px 11px rgba(189,189,189,0.3); 
        box-shadow: 0px 5px 21px 11px rgba(189,189,189,0.3);
        transition: 0.3s;
    }

    @media screen and (min-width: 1280px) {
        margin: 0px 30px;
    }
`;

export const CardBody = styled.div`
    padding: 30px;
`;

export const CardImg = styled.img`
    width: 100%;
    max-width: 100%;
`;

export const CardTitle = styled.h4`
    text-align: center;
    font-weight: bold;
    font-size: 22px;
    text-transform: uppercase;
    margin: 10px 5px;
`;

export const CardText = styled.p`
    text-align: center;
    font-size: 16x;
    color: #999999;
    margin: 15px 5px;
`;

export const CardButton = styled.div`
    margin: 30px 0;
    text-align: center;
`;
