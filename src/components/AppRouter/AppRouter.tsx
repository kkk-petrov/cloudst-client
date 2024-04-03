import { Dashboard } from "@/pages/Dashboard/Dashboard"
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import { Layout } from "../Layout/Layout"
import { Recent } from "@/pages/Recent/Recent"
import { Favorites } from "@/pages/Favorites/Favorites"
import { Trash } from "@/pages/Trash/Trash"
import { Settings } from "@/pages/Settings/Settings"
import { Shared } from "@/pages/Shared/Shared"
import { useAuthStore } from "@/store/auth.store"
import { Loader } from "../UI/Loader/Loader"
import { Protected } from "../Protected/Protected"
import { Auth } from "@/pages/Auth/Auth"
import { Suspense } from "react"
import { Test } from "@/pages/Test/Test"

export const AppRouter = () => {
  const isAuthenticated = useAuthStore(s => s.isAuthenticated());
  const isLoading = useAuthStore(s => s.isLoading);

  const router = createBrowserRouter([
    {
      element: <Suspense fallback={<Loader />}><Layout /></Suspense>,
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
        {
          path: "/settings",
          element: <Protected><Settings /></Protected>,
        },
      ],
    },
    {
      path: "/auth",
      element: isAuthenticated ? <Navigate to="/" /> : <Auth page="signin" />,
    },
    {
      path: "/auth/signup",
      element: isAuthenticated ? <Navigate to="/" /> : <Auth page="signup" />,
    },
    {
      path: "/*",
      element: <Test />,
    },
  ]);

  if (isLoading) {
    return <Loader />
  }

  return <RouterProvider router={router} />;
};
