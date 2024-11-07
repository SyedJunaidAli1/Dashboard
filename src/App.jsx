import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Transactions from "./pages/Transaction/Transactions.jsx";
import Support from "./pages/Support/Support.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transactions",
    element: <Transactions />,
  },
  {
    path: "/support",
    element: <Support />,
  },
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
