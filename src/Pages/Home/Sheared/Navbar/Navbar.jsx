import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../../Hooks/useCart";
import useAdmin from "../../../../Hooks/useAdmin";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  // console.log(user);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  // console.log(cart);
  const handleLogout = () => {
    logOutUser()
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navData = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Our Menu",
      path: "/menu",
    },
    {
      label: "Order Food",
      path: "/order/salad",
    },
  ];

  const navOptions = (
    <>
      {navData.map((item, idx) => (
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `btn btn-sm bg-[#A20F10] text-white border-none hover:bg-[#A20F10]/80`
                : "btn btn-sm btn-neutral"
            }
            to={item.path}
          >
            {item.label}
          </NavLink>
        </li>
      ))}

      {user ? (
        isAdmin ? (
          <li>
            <NavLink
              className="btn btn-sm btn-neutral"
              to={"/dashboard/adminHome"}
            >
              DashBoard
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink
              className="btn btn-sm btn-neutral"
              to={"/dashboard/userHome"}
            >
              DashBoard
            </NavLink>
          </li>
        )
      ) : (
        <li className="hidden">
          <Link to={"/"}>Please login</Link>
        </li>
      )}
      <li>
        <Link
          className="btn btn-sm btn-neutral  border-none"
          to={"/dashboard/cart"}
        >
          <FaCartShopping className="mr-2 text-gray-200 text-xl" />
          <div className="badge badge-accent">+{cart?.length}</div>
        </Link>
      </li>

      {user ? (
        <>
          <li>
            <button className="btn btn-sm btn-neutral" onClick={handleLogout}>
              LogOut
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link className="btn btn-sm btn-neutral hidden" to={"/login"}>
              Login
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <Link
            to={"/"}
            className="btn btn-neutral bg-[#A20F10] hover:bg-[#A20F10]/80 text-xl"
          >
            Dine Sphere
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex lg:items-center ">
          <ul className="menu menu-horizontal px-1 gap-3">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="avatar online">
              <div className="size-14 rounded-full">
                <img
                  src={
                    user?.photoURL ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                />
              </div>
            </div>
          ) : (
            <Link
              to={"/login"}
              className="btn btn-neutral bg-[#A20F10] hover:bg-[#A20F10]/80 text-xl"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
