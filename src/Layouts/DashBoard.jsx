import {
  FaAdn,
  FaBook,
  FaCalendar,
  FaCartShopping,
  FaEnvelope,
  FaHouse,
  FaList,
  FaMobileButton,
  FaPeopleGroup,
  FaUtensils,
} from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const DashBoard = () => {
  //  TODO:get isAdmin value from the database
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to={"/dashboard/adminHome"}>
                  <FaHouse />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/addItems"}>
                  <FaUtensils />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageItems"}>
                  <FaList />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/bookings"}>
                  <FaBook />
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/users"}>
                  <FaPeopleGroup />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
                <NavLink to={"/dashboard/paymentHistory"}>
                  <FaCalendar />
                  Payment History
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
            </>
          )}
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
          <li>
            <NavLink to={"/order/contact"}>
              <FaEnvelope />
              Contact
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
