import React from 'react';
import propTypes from 'prop-types';
import { CardBody, CardContainer, CardText, CardImg, CardTitle, CardButton } from './styles'
import { Button } from '../../../../components/button/styles'

Card.propTypes = {
    img: propTypes.node,
    alt: propTypes.string,
    title: propTypes.string,
    text: propTypes.string
}

function Card(props) {
    return (
        <CardContainer>
            <CardImg src={props.img} alt={props.alt} title={props.alt} />
            <CardBody>
                <CardTitle>
                    {props.title}
                </CardTitle>
                <CardText>
                    {props.text}
                </CardText>
                <CardButton>
                    <Button as="a" width="100%">Saiba mais</Button>
                </CardButton>
            </CardBody>
        </CardContainer>
    )
}

export default Card;
