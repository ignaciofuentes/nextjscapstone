import { defineAuth } from '@aws-amplify/backend';

// Define and configure auth resource as an auth provider for data with email and userAttributes
export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailSubject: 'Welcome! Verify your email'
    },
  },
  userAttributes: {
  },
});
