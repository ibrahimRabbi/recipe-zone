import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import AuthProvider from "./components/Authentication/AuthProvider";
import Layout2 from "./components/Layout/Layout2";
 import SignUp from './components/Form/SignUp'
 import SignIn from './components/Form/SignIn'
import Layout1 from "./components/Layout/Layout1";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout2/>,
  },
  {
    path: '/layout',
    element: <Layout1 />,
    children: [
      {
        path: '/layout/signup',
        element : <SignUp/>
      },
      {
        path: '/layout/signin',
        element : <SignIn/>
      },
    ]
  },
])

function App() {
  return (
    <div>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>

    </div>
  )
}

export default App
