import React from 'react';
import propTypes from 'prop-types';
import { ContainerBlock } from './styles'

Container.propTypes = {
    children: propTypes.node
}

function Container(props) {
    return (
        <ContainerBlock fluid={props.fluid}>
            {props.children}
        </ContainerBlock>
    )
}

export default Container;