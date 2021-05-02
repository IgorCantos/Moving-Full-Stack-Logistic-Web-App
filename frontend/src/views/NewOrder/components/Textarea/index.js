import React from 'react';
import propTypes from "prop-types";
import { InputLabel, InputGroup, TextAreaField } from './styles';

TextArea.propTypes = {
  label: propTypes.string,
  id: propTypes.string,
  required: propTypes.bool,
  value: propTypes.string,
  rows: propTypes.string,
  onChange: propTypes.func,
  onBlur: propTypes.func
}

function TextArea(props) {
  return (
    <InputGroup>
    <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
    <TextAreaField required={props.required} rows={props.rows} id={props.id} onChange={props.onChange} onBlur={props.onBlur}/>
  </InputGroup>
  )
}

export default TextArea;