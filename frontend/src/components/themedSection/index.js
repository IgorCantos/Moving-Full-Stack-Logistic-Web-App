import React from 'react';
import propTypes from 'prop-types';
import { Light, Blue, Default } from './styles';

Section.propTypes = {
    background: propTypes.string,
    children: propTypes.node
}

function Section(props) {
    switch (props.background) {
        case 'light':
            return (
                <Light>
                    {props.children}
                </Light>
            );
        case 'blue':
            return (
                <Blue>
                    {props.children}
                </Blue>
            );
        default:
            return (
                <Default>
                    {props.children}
                </Default>
            );
    }
}

export default Section;