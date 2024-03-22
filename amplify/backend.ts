import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

// 1. Create an Amplify v2 application with authorization support
// 2. Build a function to create an Amplify v2 API with authorization support
defineBackend({
  auth,
  data,
});
