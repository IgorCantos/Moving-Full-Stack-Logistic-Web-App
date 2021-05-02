import React from 'react';
import propTypes from "prop-types";
import { InputLabel, InputGroup, InputField } from './styles';

Input.propTypes = {
  label: propTypes.string,
  id: propTypes.string,
  type: propTypes.string,
  autocomplete: propTypes.string,
  required: propTypes.bool,
  placeholder: propTypes.string,
  name: propTypes.string,
  value: propTypes.string,
  maxlength: propTypes.string,
  onChange: propTypes.func,
  onBlur: propTypes.func,
  onKeyPress: propTypes.func
}

function Input(props) {
  return (
    <InputGroup>
      <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
      <InputField
        type={props.type}
        autocomplete={props.autocomplete}
        required={props.required}
        id={props.id}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        maxlength={props.maxlength}
        onChange={props.onChange}
        onBlur={props.onBlur}
        onKeyPress={props.onKeyPress}
      />
    </InputGroup>
  )
}


export default Input;


