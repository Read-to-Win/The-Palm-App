import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Landing from "./pages/Landing";
import VendorHome from "./pages/vendor/VendorHome";
import DashboardLayout from "./layouts/DashboardLayout";
import VendorAds from "./pages/vendor/VendorAds";
import CreateAd from "./pages/vendor/CreateAd";
import Join from "./pages/Join";
import SignIn from "./pages/SignIn";
import VendorForm from "./pages/VendorForm";
import EditForm from "./pages/EditForm";
import Notifications from "./pages/vendor/Notifications";
import ProductDetails from "./pages/ProductDetails";
import PopularProducts from "./components/PopularProducts";
import ProductsPage from "./pages/ProductsPage";
import BuyNow from "./components/BuyNow";
import ViewDetail from "./pages/ViewDetail";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    // {
    //   path:"/vendor",
    //   element: <Vendor/>
    // },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <VendorHome />,
        },
        {
          path: "adverts",
          element: <VendorAds />,
        },
        {
          path: "create-add",
          element: <CreateAd />,
        },
        {
          path: "notifications",
          element: <Notifications />,
        },
        {
          path: "edit/:id",
          element: <EditForm />,
        },
      ],
    },
    {
      path: "/join",
      element: <Join />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/venform",
      element: <VendorForm />,
    },

    {
      path: "/edit",
      element: <EditForm />,
    },

    { path: "/product/:id", element: <ProductDetails /> },

    {
      path: "/categories",
      element: <PopularProducts />,
    },
    {
      path: "/products",
      element: <ProductsPage />,
    },

    { path: "/products/:category", element: <BuyNow /> },
    { path: "/ad-detail/:id", element: <ViewDetail /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
