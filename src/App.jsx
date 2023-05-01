import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Header from "./components/header/Header";
import SignUp from "./components/form/SignUp";
import SignIn from "./components/form/SignIn";
import Google from "./components/form/Google";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Header/>,
    children: [
      {
        path: '/signup',
        element : <SignUp/>
      },
      {
        path: 'signin',
        element : <SignIn/>
      },
      {
        path: '/google',
        element : <Google/> 
      }
    ]
  }
  
])

function App() {
  return (
    <div>
       <RouterProvider router={router}/>
   </div>
  )
}

export default App
