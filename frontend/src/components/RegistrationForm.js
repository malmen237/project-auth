import React from 'react';
import styled from 'styled-components';
import { Button, Form } from './GlobalStyles';

const RegistrationForm = ({ }) => {
  const onFormSubmit = () => {

  }

  return (
    <Form onSubmit={onFormSubmit}>
      <input type="text"
        placeholder="Choose your username">
      </input>
      <input type="text"
        placeholder="Choose your password">
      </input>
      <Button reg type="submit">Create account</Button>
    </Form >
  )
}

export default RegistrationForm;


