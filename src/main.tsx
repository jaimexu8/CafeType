import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";

import "./styles/base.css";
import "./styles/default.css";

import Root from "./routes/root";
import Leaderboard from "./routes/leaderboard";
import Store from "./routes/store";
import Login from "./routes/login";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/leaderboard",
    element: <Leaderboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/store",
    element: <Store />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
