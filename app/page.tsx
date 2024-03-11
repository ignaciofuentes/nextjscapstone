// app/page.tsx
"use client";

import TodoList from "@/components/TodoList";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import NavBar from "@/components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <TodoList />
    </>
  );
}

export default withAuthenticator(App);
