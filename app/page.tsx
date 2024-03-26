// app/page.tsx
"use client";

import TodoList from "@/components/TodoList";

// import react authentication from amplify
import { withAuthenticator } from "@aws-amplify/ui-react";

// import aws-amplify css styles for react
import "@aws-amplify/ui-react/styles.css";
import NavBar from "@/components/NavBar";

// create an App function that returns NavBar and TodoList
function App() {
  return (
    <>
      <NavBar />
      <TodoList />
    </>
  );
}

export default withAuthenticator(App);
