import React from 'react';
import propTypes from 'prop-types';
import { BorderRight, Wrapper } from './styles';

OrderData.propTypes = {
  distance: propTypes.string,
  minutes: propTypes.string,
  price: propTypes.any
}

function OrderData(props) {
  return (
    <Wrapper>
      <p>
        <strong>Distância</strong>
        <br />
        {props.distance}
    </p>
      <BorderRight />
      <p>
        <strong>Chegará em</strong>
        <br />
        {props.minutes}
    </p>
      <BorderRight />
      <p>
        <strong>Total a pagar</strong>
        <br />
        R$ {props.price}
      </p>
    </Wrapper>
  )
}

export default OrderData;