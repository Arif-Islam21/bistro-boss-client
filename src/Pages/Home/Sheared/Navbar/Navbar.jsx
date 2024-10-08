import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../../Hooks/useCart";
import useAdmin from "../../../../Hooks/useAdmin";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
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

  const navOptions = (
    <>
      <li>
        <Link to={"/menu"}>Our Menu</Link>
      </li>
      <li>
        <Link to={"/order/salad"}>Order Food</Link>
      </li>
      {user ? (
        isAdmin ? (
          <li>
            <Link to={"/dashboard/adminHome"}>DashBoard</Link>
          </li>
        ) : (
          <li>
            <Link to={"/dashboard/userHome"}>DashBoard</Link>
          </li>
        )
      ) : (
        <li className="hidden">
          <Link to={"/"}>Please login</Link>
        </li>
      )}
      <li>
        <Link to={"/dashboard/cart"}>
          <button className="btn bg-slate-600 border-none">
            <FaCartShopping className="mr-2 text-white text-xl" />
            <div className="badge badge-secondary">+{cart?.length}</div>
          </button>
        </Link>
      </li>

      {user ? (
        <>
          <li>
            <button className="" onClick={handleLogout}>
              LogOut
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl ">
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
          <Link to={"/"} className="btn btn-ghost text-xl">
            Bistro Boss
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
