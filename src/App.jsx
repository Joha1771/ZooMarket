import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import CatalogPage from "./pages/CatalogPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import SuccessPage from "./pages/SuccessPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
<<<<<<< HEAD
      {
        index: true,
        element: <HomePage />,
      },
=======
      { index: true, element: <HomePage /> },
      { path: "category/:slug", element: <CategoryPage /> },
      { path: "catalog/:category", element: <CatalogPage /> },
      { path: "product/:id", element: <ProductPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "success", element: <SuccessPage /> },
>>>>>>> a64bc9dcffdaa3c66c8d697446bd2361a97b3dca
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
