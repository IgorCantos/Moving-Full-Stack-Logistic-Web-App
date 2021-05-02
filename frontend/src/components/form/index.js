import React from 'react';
import propTypes from 'prop-types';
import { FormContainer } from './styles'

Form.propTypes = {
  onSubmit: propTypes.func,
  legend: propTypes.string,
  children: propTypes.node
}

function Form(props) {
  return (
    <FormContainer onSubmit={props.onSubmit}>
      <legend>
        <strong>{props.legend}</strong>
      </legend>
      <fieldset>
        {props.children}
      </fieldset>
    </FormContainer>
  )
}

export default Form;