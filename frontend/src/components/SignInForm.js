import React from 'react';
import styled from 'styled-components';
import { Button, Form } from './GlobalStyles';

const SignInForm = ({ }) => {
  const onFormSubmit = () => {

  }

  return (
    <>
      <Form onSubmit={onFormSubmit}>
        <input type="text"
          placeholder="Enter your username">
        </input>
        <input type="text"
          placeholder="Enter your password">
        </input>
        <Button type="submit">Sign in!</Button>
      </Form >
    </>
  )
}

export default SignInForm;



