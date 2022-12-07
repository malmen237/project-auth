import React from 'react';
import styled from 'styled-components';
import { Button, Form, Input } from './GlobalStyles';

const SignInForm = ({ }) => {
  const onFormSubmit = () => {

  }

  return (
    <>
      <Form onSubmit={onFormSubmit}>
        <Input type="text"
          placeholder="Enter your username">
        </Input>
        <Input type="text"
          placeholder="Enter your password">
        </Input>
        <Button type="submit">Sign in!</Button>
      </Form >
    </>
  )
}

export default SignInForm;



