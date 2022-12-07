import React from 'react';
import SignInForm from 'components/SignInForm';
import SignOutButton from 'components/SignOutButton';
import RegistrationForm from 'components/RegistrationForm';
import { Wrapper } from 'components/GlobalStyles';

export const App = () => {
  return (
    <Wrapper>
      <RegistrationForm />
      <SignInForm />
      <SignOutButton />
    </Wrapper>
  );
}
