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
import { Loader } from "../UI/Loader/Loader"
import { Protected } from "../Protected/Protected"

export const AppRouter = () => {
  const store = useAuthStore(store => store);

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Protected><Dashboard /></Protected>,
        },
        {
          path: "/recent",
          element: <Protected><Recent /></Protected>,
        },
        {
          path: "/favorites",
          element: <Protected><Favorites /></Protected>,
        },
        {
          path: "/trash",
          element: <Protected><Trash /></Protected>,
        },
        {
          path: "/shared",
          element: <Protected><Shared /></Protected>,
        },
      ],
    },
    {
      path: "/auth/logout",
      element: <Protected><Logout /></Protected>,
    },
    {
      path: "/settings",
      element: <Protected><Settings /></Protected>,
    },
    {
      path: "/auth/login",
      element: store.token ? <Navigate to="/" /> : <Login />,
    },
  ]);

  if (store.isLoading) {
    return <Loader />
  }

  return <RouterProvider router={router} />;
};
