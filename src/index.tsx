import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store";
import Login from "./components/Login/Login";
import Greeting from "./components/Greeting/Greeting";

const router = createBrowserRouter([
  {
    path: "/Registration-form",
    element: <App />,
  },
  {
    path: "/Registration-form/login",
    element: <Login />,
  },
  {
    path: "/Registration-form/greeting",
    element: <Greeting />,
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
