import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <h1>home page </h1>
    },
    {
      path :'/login',
      element : <h1> login page</h1>
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
