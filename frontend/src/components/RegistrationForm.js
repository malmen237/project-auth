import React from 'react';
import styled from 'styled-components';
import { Button, Form, Input } from './GlobalStyles';

const RegistrationForm = ({ }) => {
  const onFormSubmit = () => {

  }

  return (
    <Form onSubmit={onFormSubmit}>
      <Input type="text"
        placeholder="Choose your username">
      </Input>
      <Input type="text"
        placeholder="Choose your password">
      </Input>
      <Button reg type="submit">Create account</Button>
    </Form >
  )
}

export default RegistrationForm;


