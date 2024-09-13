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
    </div>
  );
};

export default MenuCategory;
