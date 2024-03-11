// components/TodoList.tsx
"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

// generate your data client using the Schema from your backend
const client = generateClient<Schema>();

export default function TodoList() {
  const [todos, setTodos] = useState<Schema["Todo"][]>([]);

  async function listTodos() {
    // fetch all todos
    const { data } = await client.models.Todo.list();
    setTodos(data);
  }

  useEffect(() => {
    const sub = client.models.Todo.observeQuery().subscribe(({ items }) =>
      setTodos([...items])
    );

    return () => sub.unsubscribe();
  }, []);

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="w-full max-w-xs">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <h1 className="block text-gray-700 text-lg font-bold mb-2">
              Todo List
            </h1>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={async () => {
                // create a new Todo with the following attributes
                let title = window.prompt("title");
                if (title != null) {
                  const { errors, data: newTodo } =
                    await client.models.Todo.create({
                      // prompt the user to enter the title
                      content: title,
                      done: false,
                      priority: "medium",
                    });
                  console.log(errors, newTodo);
                }
              }}
            >
              Add new todo{" "}
            </button>
          </div>
          <div>
            <ul className="list-reset">
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className="flex justify-between items-center bg-gray-100 rounded mb-2 p-2"
                >
                  <span className="text-gray-700">{todo.content}</span>
                  <div>
                    <button
                      onClick={async () => {
                        await client.models.Todo.delete({ id: todo.id });
                      }}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
