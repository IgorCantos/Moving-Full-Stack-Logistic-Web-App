import React from 'react';
import { InputLabel, InputGroup, SelectField } from './styles';
import propTypes from "prop-types";

Select.propTypes = {
  label: propTypes.string,
  id: propTypes.string,
  type: propTypes.string,
  required: propTypes.bool,
  name: propTypes.string,
  value: propTypes.string,
  onChange: propTypes.func,
  children: propTypes.node
}

function Select(props) {
  return (
    <InputGroup>
      <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
      <SelectField required={props.required} id={props.id} onChange={props.onChange}>
        {props.children}
      </SelectField>
    </InputGroup>
  )
}

export default Select;