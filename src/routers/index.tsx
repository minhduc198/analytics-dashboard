import App from '@/App'
import { Layout } from '@/layouts'
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'
import { path } from './path'
import ECommerce from '@/features/ecommerce'
import Analytics from '@/features/analytics'
import Marketing from '@/features/marketing'
import TextGenerator from '@/features/textgenerator'
import Profile from '@/features/profile'

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
    element: <App />,
    children: [
      {
        path: '/',
        element: <ProtectedRoute />,
        children: [
          {
            path: path.eCommerce,
            element: <Layout />,
            children: [
              { path: path.profile, element: <Profile /> },
              { path: path.eCommerce, element: <ECommerce /> },
              { path: path.analytics, element: <Analytics /> },
              { path: path.marketing, element: <Marketing /> },
              { path: path.textGenerator, element: <TextGenerator /> },
            ],
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
