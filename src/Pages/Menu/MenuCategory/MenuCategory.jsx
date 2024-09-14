import { Link } from "react-router-dom";
import Cover from "../../Home/Sheared/Cover/Cover";
import MenuItem from "../../Home/Sheared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={coverImg} title={title} />}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4 mt-16 mx-6">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link
        to={`/order/${title}`}
        className="btn btn-outline border-0 border-b-4 mt-4"
      >
        Order Your Favourite Food
      </Link>
    </div>
  );
};

export default MenuCategory;
