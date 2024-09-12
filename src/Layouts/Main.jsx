import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Sheared/Footer/Footer";
import Navbar from "../Pages/Home/Sheared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
