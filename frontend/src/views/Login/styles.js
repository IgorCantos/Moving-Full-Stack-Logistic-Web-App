import styled from 'styled-components';
import wavesImg from '../../assets/imgs/waves.png';

export const BlueBackground = styled.div`
    height: 100vh;
    background-image: url(${wavesImg}), rgb(0,157,255);
    background-image: url(${wavesImg}), -moz-linear-gradient(180deg, rgba(0,157,255,1) 0%, rgba(89,191,255,1) 100%);
    background-image: url(${wavesImg}), -webkit-linear-gradient(180deg, rgba(0,157,255,1) 0%, rgba(89,191,255,1) 100%);
    background-image: url(${wavesImg}), linear-gradient(180deg, rgba(0,157,255,1) 0%, rgba(89,191,255,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#009dff",endColorstr="#59bfff",GradientType=1);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top right;
`

export const Logo = styled.img`
    display: flex;
    margin: 20px auto 10px auto;
`
export const Form = styled.form`
    background-color: white;
    border: 0px;
    border-radius: 15px;
    max-width: 500px;
    padding: 20px;
    margin: 10px auto;
`