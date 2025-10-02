import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../layout";
import { About, Home, ProductDetails, Products } from "../pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "products", Component: Products },
      { path: "products/:id", Component: ProductDetails },
    ],
  },
]);
