import styled from 'styled-components';
import wavesImg from '../../assets/imgs/waves.png';

export const BlueBackground = styled.div`
    min-height: 680px;
    background-image: url(${wavesImg}), rgb(0,157,255);
    background-image: url(${wavesImg}), -moz-linear-gradient(180deg, rgba(0,157,255,1) 0%, rgba(89,191,255,1) 100%);
    background-image: url(${wavesImg}), -webkit-linear-gradient(180deg, rgba(0,157,255,1) 0%, rgba(89,191,255,1) 100%);
    background-image: url(${wavesImg}), linear-gradient(180deg, rgba(0,157,255,1) 0%, rgba(89,191,255,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#009dff",endColorstr="#59bfff",GradientType=1);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top right;
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0 0;

    .nav-links {
       display: none;

       @media screen and (min-width:992px) {
           display: block;
       }

       .button-link {
          color: white;
          font-weight: bold;
          text-decoration: none;
          text-transform: uppercase;
          padding: 0 15px;
       }
   }
`

export const Section = styled.div`
   @media screen and (min-width: 1200px) {
        padding: 40px 0;
   }
`

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`

export const FlexItem = styled.div`
    padding: 0px 5px;
    width: 100%;

    @media screen and (min-width:550px) {
        width: 70%;
    }

    @media screen and (min-width:992px) {
        width: 50%;
    }
`

export const MainImg = styled.img`
    width: 100%;
    max-width: 500px;
    display: block;
    margin: 20px auto;
    padding-bottom: 20px;

    @media screen and (min-width:992px) {
        margin-top: 60px;
    }
`

export const SectionImg = styled.img`
    width: 100%;
    max-width: 100%;
    display: block;
    margin: 20px auto;

    @media screen and (min-width: 992px) {
        margin: 20px 20px 20px -20px;
    }
`

export const Title = styled.h1`
    font-size: 40px;
    font-weight: bold;
    color: white;
    margin: 0;
    text-align: center;
    line-height: 45px;

    @media screen and (min-width:768px) {
        font-size: 55px;
        line-height: 73px;
    }

    @media screen and (min-width:992px) {
        text-align: left;
        line-height: 65px;
        margin-top: 60px;
    }

    @media screen and (min-width:1140px) {
        font-size: 65px;
        line-height: 73px;
    }
`

export const Subtitle = styled.h2`
    font-size: 18px;
    font-weight: normal;
    color: white;
    margin-top: 10px;
    text-align: center;

    @media screen and (min-width:992px) {
        text-align: left;
    }
`

export const SectionTitle = styled.h3`
    font-size: 25px;
    font-weight: bold;
    color: black;
    margin: 0px 0px 50px 0px;
    text-align: ${props => props.align || 'center'};

    @media screen and (min-width:768px) {
        font-size: 35px;
    }
`

export const SectionSubtitle = styled.p`
    font-size: 16px;
    color: #999999;
    margin: 50px 0px 10px;
    text-align: ${props => props.align || 'center'};
    text-transform: uppercase;
`

export const CheckMark = styled.p`
    margin: 15px 0;
`

export const ButtonContainer = styled.div`
    margin: 30px 0;
    text-align: center;

    @media screen and (min-width: 992px) {
        text-align: left;
    }
`