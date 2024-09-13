import { Helmet } from "react-helmet-async";
import Cover from "../../Home/Sheared/Cover/Cover";
import img from "../../../assets/menu/banner3.jpg";
import dessertBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      {/* main cover */}
      <Cover img={img} title={"Our Menu"} />
      <SectionTitle subHeading={"Don't miss"} heading={"today's offer"} />
      {/* offered items */}
      <MenuCategory items={offered} />
      {/* dessert itemsd */}
      <MenuCategory items={dessert} title={"Dessert"} coverImg={dessertBg} />
      {/* pizza */}
      <MenuCategory items={pizza} title={"Pizza"} coverImg={pizzaBg} />
      {/* salad */}
      <MenuCategory items={salad} title={"Salad"} coverImg={saladBg} />
      {/* salad */}
      <MenuCategory items={soup} title={"Soup"} coverImg={soupBg} />
    </div>
  );
};

export default Menu;
