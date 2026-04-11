import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import CatalogPage from "./pages/CatalogPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "category/:slug", element: <CategoryPage /> },
      { path: "catalog/:category", element: <CatalogPage /> },
      { path: "product/:id", element: <ProductPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
