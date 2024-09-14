import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Home/Sheared/Footer/Footer";
import Navbar from "../Pages/Home/Sheared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  console.log(location);
  const noHeaderFooter = location.pathname.includes("login");
  return (
    <div>
      {noHeaderFooter || <Navbar />}
      <Outlet />
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
