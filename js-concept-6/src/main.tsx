import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import AddToDo from "./pages/AddToDo";
import TodoItem from "./pages/TodoItem";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/add",
        element: <AddToDo />,
    },
    {
        path: "/:id",
        element: <TodoItem />,
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
