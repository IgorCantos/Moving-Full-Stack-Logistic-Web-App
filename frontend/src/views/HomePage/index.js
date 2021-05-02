import React from 'react';
import { Link } from 'react-router-dom';

import logoMoving from '../../assets/imgs/logo-moving.png';
import homePageImg from '../../assets/imgs/homepage-img.png';
import imgEcommerce from '../../assets/imgs/card-img-e-commerce.png';
import imgOffices from '../../assets/imgs/card-img-escritorios.png';
import imgYou from '../../assets/imgs/card-img-you.png';
import deliveryImg from '../../assets/imgs/delivery-img.jpg';
import checkMark from '../../assets/imgs/checkmark.png';
import { Button } from '../../components/button/styles';
import { BlueBackground, Nav, FlexRow, Subtitle, Title, FlexItem, MainImg, SectionImg, SectionTitle, SectionSubtitle, Section, ButtonContainer, CheckMark } from './styles';
import Container from '../../components/container';
import Card from './components/card';

function HomePage() {
    return (
        <div>
            <BlueBackground>
                <Container>
                    <Nav>
                        <img
                            src={logoMoving}
                            width="120"
                            height="auto"
                            alt="Texto branco escrito Moving em letras cursivas"
                            title="Moving - Suas encomendas em ótimas mãos."
                        />
                        <div className="nav-links">
                            <a href="#" className="button-link">Calcular frete</a>
                            <a href="#" className="button-link">Rastrear pedido</a>
                            <a href="#" className="button-link">Seja um(a) parceiro(a)</a>
                        </div>
                    </Nav>
                </Container>

                <Container>
                    <FlexRow>
                        <FlexItem>
                            <Title>
                                Buscamos, Transportamos e Entregamos.
                            </Title>

                            <Subtitle>
                                Somos uma solução para você enviar encomendas de forma rápida e segura para qualquer lugar do Brasil.
                            </Subtitle>

                            <FlexRow>
                                <FlexItem>
                                    <Link to="/login">
                                        <Button fontSize="18px" width="100%">Enviar encomenda</Button>
                                    </Link>
                                </FlexItem>

                                <FlexItem>
                                    <Link to="/criar-conta">
                                        <Button fontSize="18px" width="100%">Criar conta</Button>
                                    </Link>
                                </FlexItem>
                            </FlexRow>
                        </FlexItem>
                        <FlexItem>
                            <MainImg src={homePageImg} alt="Foto de uma mulher feliz recebendo sua encomenda de um entregador" title="Suas encomendas em ótimas mãos." />
                        </FlexItem>
                    </FlexRow>
                </Container>
            </BlueBackground>

            <Section>
                <Container>
                    <SectionSubtitle>
                        O que fazemos?
                    </SectionSubtitle>

                    <SectionTitle>
                        Soluções de logística on-demand <br />para você ou para o seu negócio.
                    </SectionTitle>
                    <FlexRow>
                        <Card img={imgEcommerce} title="e-commerce" text="Entregamos os pedidos do seu e-commerce em, no máximo, 2 dias." />
                        <Card img={imgOffices} title="escritórios" text="Entregamos suas encomendas urgentes nas principais capitais do país." />
                        <Card img={imgYou} title="você" text="Envie encomendas para todo o Brasil de forma simples, fácil e barata." />
                    </FlexRow>
                </Container>
            </Section>

           <Section>
                <Container>
                    <FlexRow>
                        <FlexItem>
                            <SectionImg src={deliveryImg} alt="Foto de um entregador saindo de uma van com uma encomenda." title="Suas encomendas em ótimas mãos." />
                        </FlexItem>
                        <FlexItem>
                            <SectionSubtitle align="left">
                                Vem pra moving
                            </SectionSubtitle>

                            <SectionTitle align="left">
                                Já somos a principal escolha de mais de 100 mil clientes.
                            </SectionTitle> 

                            <CheckMark>
                                <img src={checkMark} alt="" title="" /> Entregas via motoboy, van, mini-van e caminhões.
                            </CheckMark>

                            <CheckMark>
                                <img src={checkMark} alt="" title="" /> Rastreio da encomenda em tempo real por GPS.
                            </CheckMark>

                            <CheckMark>
                                <img src={checkMark} alt="" title="" /> Tenha o controle de todas as encomendas enviadas através da nossa plataforma.
                            </CheckMark>

                            <ButtonContainer>
                                <Button as="a" fontSize="18px" width="auto">Enviar encomenda</Button>
                            </ButtonContainer>
                        </FlexItem>
                    </FlexRow>
                </Container>
           </Section>

        </div>
    );
}


export default HomePage;