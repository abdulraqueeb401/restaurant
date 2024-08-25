import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import "./index.css";
import Overview from "./routes/Overview.jsx";
import Order from "./routes/Order.jsx";
import Reviews from "./routes/Reviews.jsx";
import Photos from "./routes/Photos.jsx";
import BookTable from "./routes/BookTable.jsx";
import ErrorPage from "./ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Overview /> },
      {
        path: "/order-online",
        element: <Order />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/photos",
        element: <Photos />,
      },
      {
        path: "/book-table",
        element: <BookTable />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
