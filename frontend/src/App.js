import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Register from './Pages/Register';
function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <h1>home page </h1>
    },
    {
      path :'/login',
      element : <h1> login page</h1>
    },
    {
      path :'/register',
      element: <Register/>
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
