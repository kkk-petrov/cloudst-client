import { Dashboard } from "@/pages/Dashboard/Dashboard"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Layout } from "../Layout/Layout"
import { Recent } from "@/pages/Recent/Recent"
import { Favorites } from "@/pages/Favorites/Favorites"
import { Trash } from "@/pages/Trash/Trash"
import { Settings } from "@/pages/Settings/Settings"

export const AppRouter = () => {
  const router = createBrowserRouter([
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
          path: "/settings",
          element: <Settings />,
        },
      ]
    }
  ])

  return <RouterProvider router={router}/>
}
