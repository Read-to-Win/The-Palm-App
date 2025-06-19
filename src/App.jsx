import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Landing from "./pages/Landing";
import VendorHome from "./pages/vendor/VendorHome";
import DashboardLayout from "./layouts/DashboardLayout";
import VendorAds from "./pages/vendor/VendorAds";
import CreateAd from "./pages/vendor/CreateAd";
import Join from "./pages/Join";
import SignIn from "./pages/SignIn";

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
  ]);

  return <RouterProvider router={router} />;
}

export default App;
