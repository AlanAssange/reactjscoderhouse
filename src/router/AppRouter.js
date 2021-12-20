import React from "react";
import { Navigate, useRoutes } from "react-router";
import { CartView } from "../components/CartView";
import { Checkout } from "../components/Checkout";
import { ItemDetailContainer } from "../components/ItemDetailContainer";
import { ItemListContainer } from "../components/ItemListContainer";

export const AppRouter = () => {
  const routes = useRoutes([
    { path: "/", element: <ItemListContainer /> },
    { path: "/productos/:catId", element: <ItemListContainer /> },
    { path: "/detail/:itemId", element: <ItemDetailContainer /> },
    { path: "/cart", element: <CartView /> },
    { path: "/checkout", element: <Checkout /> },
    { path: "*", element: <Navigate to="/" /> },
  ]);

  return routes;
};
