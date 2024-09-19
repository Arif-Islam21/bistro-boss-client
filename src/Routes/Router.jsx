import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Home/Sheared/Secret/Secret";
import DashBoard from "../Layouts/DashBoard";
import Cart from "../Pages/DashBoard/Cart/Cart";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import AddItems from "../Pages/DashBoard/AddItems/AddItems";
import PrivateAdmin from "./PrivateAdmin";
import ManageItems from "../Pages/DashBoard/ManageItems/ManageItems";
import UpdateItem from "../Pages/DashBoard/UpdateItem/UpdateItem";
import Payment from "../Pages/DashBoard/Payment/Payment";
import PaymentHistory from "../Pages/DashBoard/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/DashBoard/UserHome/UserHome";
import AdminHome from "../Pages/DashBoard/AdminHome/AdminHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoute>
            <Secret />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashBoard />
      </PrivateRoute>
    ),
    children: [
      // normal user route
      {
        path: "userHome",
        element: <UserHome />,
      },
      {
        path: "cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },
      {
        path: "payment",
        element: <Payment />,
      },

      // admin routes
      {
        path: "adminHome",
        element: (
          <PrivateAdmin>
            <AdminHome />
          </PrivateAdmin>
        ),
      },
      {
        path: "addItems",
        // element: <AddItems />,
        element: (
          <PrivateAdmin>
            <AddItems />
          </PrivateAdmin>
        ),
      },
      {
        path: "manageItems",
        element: (
          <PrivateAdmin>
            <ManageItems />
          </PrivateAdmin>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <PrivateAdmin>
            <UpdateItem />
          </PrivateAdmin>
        ),
        loader: ({ params }) =>
          fetch(
            `https://bistro-boss-server-eta-mauve.vercel.app/menu/${params.id}`
          ),
      },
      {
        path: "users",
        element: (
          <PrivateAdmin>
            <AllUsers />
          </PrivateAdmin>
        ),
      },
    ],
  },
]);

export default router;
