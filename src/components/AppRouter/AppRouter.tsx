import { Dashboard } from "@/pages/Dashboard/Dashboard"
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import { Layout } from "../Layout/Layout"
import { Recent } from "@/pages/Recent/Recent"
import { Favorites } from "@/pages/Favorites/Favorites"
import { Trash } from "@/pages/Trash/Trash"
import { Settings } from "@/pages/Settings/Settings"
import { Login } from "@/pages/Auth/Login/Login"
import { Shared } from "@/pages/Shared/Shared"
import { useAuthStore } from "@/store/store"
import { Logout } from "@/pages/Auth/Logout/Logout"

export const AppRouter = () => {
  const store = useAuthStore(store => store);

  const defineRoutes = () => {
    const authenticatedRoutes = [
      {
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Dashboard />,
          },
          {
            path: "/recent",
            element: <Recent />,
          },
          {
            path: "/favorites",
            element: <Favorites />,
          },
          {
            path: "/trash",
            element: <Trash />,
          },
          {
            path: "/shared",
            element: <Shared />,
          },
        ]
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/auth/logout",
        element: <Logout />,
      },
    ];

    const unauthenticatedRoutes = [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "*",
        element: <Navigate to="/auth/login" replace />,
      },
    ];

    return store.userId ? authenticatedRoutes : unauthenticatedRoutes;
  };

  const router = createBrowserRouter(defineRoutes());

  return <RouterProvider router={router} />;
};
