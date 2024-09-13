import { Helmet } from "react-helmet-async";
import Cover from "../../Home/Sheared/Cover/Cover";
import img from "../../../assets/menu/banner3.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Cover img={img} title={"Our Menu"} />
    </div>
  );
};

export default Menu;
