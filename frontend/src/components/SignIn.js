import React from 'react';
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
        <Button signIn type="submit">Log in!</Button>
      </Form >
    </>
  )
}

export default SignInForm;


