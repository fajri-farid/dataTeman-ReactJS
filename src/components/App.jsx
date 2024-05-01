import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import { TambahData } from "../app/tambahData";
import { Home } from "../app/home";
import { EditData } from "../app/editData";
import { Register } from "../app/auth/register";
import { Login } from "../app/auth/login";
import { Page } from "../app/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "tambah-data",
    element: <TambahData />,
  },
  {
    path: "edit-data/:id",
    element: <EditData />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
