import App from '@/App'
import { Layout } from '@/layouts'
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'
import { path } from './path'
import DashBoard from '@/features/dashboard'

function ProtectedRoute() {
  // const { isAuthenticated } = useContext(AppContext)
  const isAuthenticated = true

  if (isAuthenticated) return <Outlet />

  return <Navigate to={path.login} />
}

function RejectedRoute() {
  // const { isAuthenticated } = useContext(AppContext)
  const isAuthenticated = true


  if (isAuthenticated) {
    return <Navigate to={path.home} />
  }

  return <Outlet />
}


export const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: '/',
        element: <ProtectedRoute/>,
        children: [
          {
            path: path.home,
            element: <Layout />,
            children: [
              {path: path.home,
                element: <DashBoard/>
              }
            ]
          },
        ],
      },

      {
        path: '/',
        element: <RejectedRoute />,
        children: [
          // {
          //   path: PATHS.LOGIN,
          //   element: <LoginPage />,
          // },
        ],
      },
    ],


  },



  // {
  //   path: '*',
  //   element: <NotFoundPage />,
  // },
])
