// create an tsx file for Amplify configuration.
"use client";

// Configure amplify for this project.
// Step 1. Create imports for amplify in the project.
import config from "@/amplifyconfiguration.json";
import { Amplify } from "aws-amplify";

// Step 2. Use configure function from Amplify with default configuration, overriding the ssr value to true.
Amplify.configure(config, { ssr: true });

// Step 3. Define default function to configure amplify in the client side with null value
export default function ConfigureAmplifyClientSide() {
    return null;
}
