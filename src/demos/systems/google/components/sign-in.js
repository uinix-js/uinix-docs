import React from 'react';
import {Text} from 'uinix-ui';

const SignIn = () => {
  return (
    <Text
      as="a"
      href="https://accounts.google.com/signin"
      px="x6"
      py="x2"
      variant="buttonLink"
    >
      Sign In
    </Text>
  );
};

export default SignIn;
