import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import { TambahData } from "../app/tambahData";
import { Home } from "../app/home";
import { EditData } from "../app/editData";

const router = createBrowserRouter([
  {
    path: "/",
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
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
