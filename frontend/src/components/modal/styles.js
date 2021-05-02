import styled from 'styled-components';

export const Modal = styled.div`
    display: none;
    background-color: hsla(0 0% 0% / 0.9);
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
`;

export const ModalBody = styled.div`
    background-color: white;
    border: 0px;
    border-radius: 15px;
    max-width: 500px;
    padding: 20px;
    margin: 10px auto;
    text-align: center;
    min-height: 450px;
`;
