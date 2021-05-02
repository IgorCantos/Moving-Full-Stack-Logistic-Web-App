import styled from 'styled-components';
import wavesImg from '../../assets/imgs/waves.png';

export const Light = styled.div`
    background-color: #f9f9f9;
    height: 100vh;
`;

export const Blue = styled.div`
    min-height: 680px;
    background-image: url(${wavesImg}), rgb(0,157,255);
    background-image: url(${wavesImg}), -moz-linear-gradient(180deg, rgba(0,157,255,1) 0%, rgba(89,191,255,1) 100%);
    background-image: url(${wavesImg}), -webkit-linear-gradient(180deg, rgba(0,157,255,1) 0%, rgba(89,191,255,1) 100%);
    background-image: url(${wavesImg}), linear-gradient(180deg, rgba(0,157,255,1) 0%, rgba(89,191,255,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#009dff",endColorstr="#59bfff",GradientType=1);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top right;
`;

export const Default = styled.div`
    background-color: 'white';
`;
