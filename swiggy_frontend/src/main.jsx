import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Offer from './components/Offer.jsx'
import Body from './components/Body.jsx'
import Help from './components/Help.jsx'
import SignIn from './components/SignIn.jsx'
import { RouterProvider, Routes } from "react-router"
import { createBrowserRouter } from 'react-router-dom';

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
      path: "/Offers",
      element: <Offer />,
    },
    {
      path: "/help",
      element: <Help />,
    },
    {
      path: "/SignIn",
      element: <SignIn />,
    }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRoutes} />
)
