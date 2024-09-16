import {
  FaAdn,
  FaBook,
  FaCalendar,
  FaCartShopping,
  FaHouse,
  FaMobileButton,
} from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu">
          <li>
            <NavLink to={"/dashboard/userHome"}>
              <FaHouse />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/cart"}>
              <FaCartShopping />
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/reservation"}>
              <FaCalendar />
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/review"}>
              <FaAdn />
              review
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/bookings"}>
              <FaBook />
              Bookings
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              <FaHouse />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/menu"}>
              <FaMobileButton />
              Menu
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
