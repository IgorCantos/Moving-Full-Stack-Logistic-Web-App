import React from 'react';
import propTypes from 'prop-types';
import { Tooltip, TooltipText, Wrapper } from './styles'

Marker.propTypes = {
  text: propTypes.string,
  onClick: propTypes.func,
};

function Marker(props) {
  return (
    <Wrapper
      text={props.text}
      onClick={props.onClick}
    >
      <Tooltip>
        <TooltipText>
          <p>{props.text}</p>
        </TooltipText>
      </Tooltip>

    </Wrapper>
  )
}

export default Marker;
